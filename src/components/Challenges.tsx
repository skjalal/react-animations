import { useContext, useState, type FC, type JSX } from "react";

import { ChallengesContext } from "../store/ChallengesContext";
import ChallengeItem from "./ChallengeItem";
import ChallengeTabs from "./ChallengeTabs";
import type { Status, Challenges as C } from "../types/data-types";

const Challenges: FC = (): JSX.Element => {
  const { challenges } = useContext(ChallengesContext);
  const [selectedType, setSelectedType] = useState<Status>("active");
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleSelectType = (newType: Status): void => setSelectedType(newType);

  const handleViewDetails = (id: string): void => {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  };

  const filteredChallenges: C = {
    active: challenges.filter((challenge) => challenge.status === "active"),
    completed: challenges.filter(
      (challenge) => challenge.status === "completed",
    ),
    failed: challenges.filter((challenge) => challenge.status === "failed"),
  };

  const displayedChallenges = filteredChallenges[selectedType];

  return (
    <div id="challenges">
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        {displayedChallenges.length > 0 && (
          <ol className="challenge-items">
            {displayedChallenges.map((challenge) => (
              <ChallengeItem
                key={challenge.id}
                challenge={challenge}
                onViewDetails={() => handleViewDetails(challenge.id!)}
                isExpanded={expanded === challenge.id}
              />
            ))}
          </ol>
        )}
        {displayedChallenges.length === 0 && <p>No challenges found.</p>}
      </ChallengeTabs>
    </div>
  );
};

export default Challenges;
