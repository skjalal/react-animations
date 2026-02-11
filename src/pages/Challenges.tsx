import { type FC, type JSX } from "react";
import Header from "../components/Header";
import Challenges from "../components/Challenges";
import ChallengesContextProvider from "../store/ChallengesContextProvider";

const ChallengesPage: FC = (): JSX.Element => {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
};

export default ChallengesPage;
