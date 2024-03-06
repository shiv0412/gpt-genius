import Sidebar from "@/components/Sidebar";
import "./assistant.css";

export default function SidebarLayout({ children }: any) {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content-container">{children}</div>
    </div>
  );
}
