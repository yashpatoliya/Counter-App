import { Outlet } from "react-router-dom";

const LoginRoot = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LoginRoot;