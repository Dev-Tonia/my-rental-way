import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className=" min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
