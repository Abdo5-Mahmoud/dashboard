import { Sidebar } from "@/components/layout/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[calc(100vh-56px)] overflow-hidden bg-gray-100 dark:bg-gray-950">
      {/* Desktop Sidebar (Server) */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 ">
        {children}
      </main>
    </div>
  );
};

export default layout;
