import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Provider } from "react-redux";
import store from "../../store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
