import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen px-8 py-4">

        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Developed by Tanmay Jha (aka Surge3.14)
      </div>
    </div>
  );
};

export default AppLayout;
