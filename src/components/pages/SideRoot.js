import MainNavigation from "../MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";

const SideRoot = (props) => {
    console.log(props)
  return (
    <>
      <MainNavigation start={true} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SideRoot;
