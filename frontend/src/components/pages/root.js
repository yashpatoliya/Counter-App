import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Provider } from "react-redux";
import store from "../../store";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";

const RootLayout = () => {

  return (
    <>
      <Provider store={store}>
        <MainNavigation />
        <main>
          {/* <Suspense fallback={<Spinner/>}> */}
           <Outlet />
          {/* </Suspense> */}
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
