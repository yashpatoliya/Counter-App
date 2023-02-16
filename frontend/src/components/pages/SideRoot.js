import MainNavigation from "../MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
const SideRoot = (props) => {
  console.log(props);
  return (
    <>
        <MainNavigation start={true} title='Side Pages'/>
        <main>
          <Outlet />
        </main>
    </>
  );
};

export default SideRoot;
