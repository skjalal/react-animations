import { type FC, type JSX, type PropsWithChildren } from "react";
import Badge from "./Badge";
import type { ChallengeTabsProps, TabProps } from "../types/data-types";

const Tab: FC<PropsWithChildren<TabProps>> = ({
  isSelected,
  onSelect,
  badgeCaption,
  children,
}): JSX.Element => {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge caption={badgeCaption}></Badge>
      </button>
      {isSelected && <div className="active-tab-indicator" />}
    </li>
  );
};

const ChallengeTabs: FC<PropsWithChildren<ChallengeTabsProps>> = ({
  selectedType,
  onSelectType,
  challenges,
  children,
}): JSX.Element => {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
};

export default ChallengeTabs;
