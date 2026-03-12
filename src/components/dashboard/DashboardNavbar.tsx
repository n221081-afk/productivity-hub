'use client';

import { useSession } from 'next-auth/react';

export function DashboardNavbar() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 lg:pl-6">
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600">
          {user?.name ?? user?.email}
        </span>
        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium text-sm">
          {(user?.name?.[0] ?? user?.email?.[0] ?? '?').toUpperCase()}
        </div>
      </div>
    </header>
  );
}
