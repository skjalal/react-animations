import { type FC, type JSX, useState } from "react";
import NewChallenge from "./NewChallenge";

const Header: FC = (): JSX.Element => {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] =
    useState<boolean>(false);
  const handleStartAddNewChallenge = (): void =>
    setIsCreatingNewChallenge(true);
  const handleDone = (): void => setIsCreatingNewChallenge(false);

  return (
    <>
      {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}

      <header id="main-header">
        <h1>Your Challenges</h1>
        <button onClick={handleStartAddNewChallenge} className="button">
          Add Challenge
        </button>
      </header>
    </>
  );
};

export default Header;
