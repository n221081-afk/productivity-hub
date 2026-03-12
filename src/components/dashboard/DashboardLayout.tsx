import { Sidebar } from './Sidebar';
import { DashboardNavbar } from './DashboardNavbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="lg:pl-64">
        <DashboardNavbar />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
