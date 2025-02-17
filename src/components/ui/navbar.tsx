import { SidebarTrigger } from "./sidebar";

export default function Navbar() {
  return (
    <div className="bg-zinc-600 text-white h-16 flex items-center justify-between px-4">
      <SidebarTrigger />
    </div>
  );
}
