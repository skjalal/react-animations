import { useState, type FC, type JSX, type PropsWithChildren } from "react";
import { ChallengesContext } from "./ChallengesContext";
import type {
  Challenge,
  ChallengesContextProps,
  Status,
} from "../types/data-types";

const ChallengesContextProvider: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  const addChallenge = (challenge: Challenge) =>
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prevChallenges,
    ]);

  const updateChallengeStatus = (challengeId: string, newStatus: Status) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      }),
    );
  };

  const deleteChallenge = (challengeId: string) =>
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId),
    );

  const challengesContext: ChallengesContextProps = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext value={challengesContext}>{children}</ChallengesContext>
  );
};

export default ChallengesContextProvider;
