import { type FC, type JSX, useContext } from "react";
import { ChallengesContext } from "../store/ChallengesContext";
import type { ChallengeItemProps } from "../types/data-types";

const ChallengeItem: FC<ChallengeItemProps> = ({
  challenge,
  onViewDetails,
  isExpanded,
}): JSX.Element => {
  const { updateChallengeStatus } = useContext(ChallengesContext);

  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );

  const handleCancel = (): void =>
    updateChallengeStatus(challenge.id!, "failed");
  const handleComplete = (): void =>
    updateChallengeStatus(challenge.id!, "completed");

  return (
    <li>
      <article className="challenge-item">
        <header>
          <img src={challenge.image?.src} alt={challenge.image?.alt} />
          <div className="challenge-item-meta">
            <h2>{challenge.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className="challenge-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
        </header>
        <div className="challenge-item-details">
          <p>
            <button onClick={onViewDetails}>
              View Details{" "}
              <span className="challenge-item-details-icon">&#9650;</span>
            </button>
          </p>

          {isExpanded && (
            <div>
              <p className="challenge-item-description">
                {challenge.description}
              </p>
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

export default ChallengeItem;
