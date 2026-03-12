import { getSession } from '@/lib/auth-server';
import { redirect } from 'next/navigation';
import { DashboardWidgets } from '@/components/dashboard/DashboardWidgets';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session?.user) redirect('/login');

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">
        Welcome back, {session.user.name ?? session.user.email}
      </h1>
      <p className="mt-1 text-slate-600">
        Here&apos;s an overview of your productivity.
      </p>
      <DashboardWidgets userId={session.user.id} />
    </div>
  );
}
