import { createContext } from "react";
import type {
  ChallengesContextProps,
  Challenge,
  Status,
} from "../types/data-types";

const defaultAddChallenge = (challenge: Challenge) =>
  console.log("Default add challenge", challenge);
const defaultUpdateChallengeStatus = (challengeId: string, newStatus: Status) =>
  console.log("Default update challenge", challengeId, newStatus);
const defaultDeleteChallenge = (challengeId: string) =>
  console.log("Default removing challenge of ID: ", challengeId);

export const ChallengesContext = createContext<ChallengesContextProps>({
  challenges: [],
  addChallenge: defaultAddChallenge,
  updateChallengeStatus: defaultUpdateChallengeStatus,
  deleteChallenge: defaultDeleteChallenge,
});
