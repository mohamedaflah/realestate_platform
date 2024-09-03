import { PanelRightOpen } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <main className="w-full scrollbar-none flex h-screen overflow-hidden">
      <aside className="h-full border-r w-56 py-2">
        <div className="w-full h-14 flex items-center border-b px-2 justify-between">
          <h2 className="text-colors-forground font-semibold">Menu</h2>
          <PanelRightOpen className="w-5" />
        </div>
        <div className="w-full flex flex-col gap-4 px-3 py-4">
          <Link
            to={""}
            className="h-10 text-sm font-semibold shadow-md flex items-center w-full border px-2 rounded-md"
          >
            Properties
          </Link>
          <Link
            to={""}
            className="h-10 text-sm font-semibold shadow-md flex items-center w-full border px-2 rounded-md"
          >
            Users
          </Link>
        </div>
      </aside>
      <section className="flex-1 h-full p-4 overflow-y-auto scrollbar-none">
        <Outlet />
      </section>
    </main>
  );
};
