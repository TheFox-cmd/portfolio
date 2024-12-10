import { Nav, ReactSetState } from "../types/Utils";
import Navigation from "./Navigation";

interface ResumeProps {
  navPage: Nav;
  setNavPage: ReactSetState<Nav>;
}

const Resume: React.FC<ResumeProps> = ({ navPage, setNavPage }) => {
  return (
    <>
      <Navigation navPage={navPage} setNavPage={setNavPage} />
    </>
  );
};

export default Resume;
