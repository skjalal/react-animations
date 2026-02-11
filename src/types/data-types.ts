type BadgeProps = {
  caption: number;
};

type ModalProps = {
  title: string;
  onClose: () => void;
};

type TabProps = {
  isSelected: boolean;
  onSelect: () => void;
  badgeCaption: number;
};

type Status = "active" | "completed" | "failed";

type Image = {
  src: string;
  alt: string;
};

type Challenge = {
  id?: string;
  image?: Image;
  title: string;
  description: string;
  deadline: string;
  status?: Status;
};

type Challenges = {
  active: Challenge[];
  completed: Challenge[];
  failed: Challenge[];
};

type ChallengeTabsProps = {
  selectedType: Status;
  onSelectType: (type: Status) => void;
  challenges: Challenges;
};

type ChallengesContextProps = {
  challenges: Challenge[];
  addChallenge: (challenge: Challenge) => void;
  updateChallengeStatus: (challengeId: string, newStatus: Status) => void;
  deleteChallenge: (challengeId: string) => void;
};

type NewChallengeProps = {
  onDone: () => void;
};

type ChallengeItemProps = {
  challenge: Challenge;
  onViewDetails: () => void;
  isExpanded: boolean;
};

export type {
  BadgeProps,
  ModalProps,
  TabProps,
  ChallengeTabsProps,
  Challenge,
  Challenges,
  Status,
  ChallengesContextProps,
  NewChallengeProps,
  Image,
  ChallengeItemProps,
};
