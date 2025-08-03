import { Outlet } from "react-router-dom";
import UserNavbar from "../user/UserNavbar";
import UserFooter from "../user/UserFooter";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <main>
        <Outlet />
      </main>
      <UserFooter />
    </>
  );
};

export default UserLayout;
