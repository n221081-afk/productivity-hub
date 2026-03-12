import Link from 'next/link';
import { CheckSquare, Wallet, StickyNote } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { getDashboardData } from '@/lib/dashboard';

interface DashboardWidgetsProps {
  userId: string;
}

export async function DashboardWidgets({ userId }: DashboardWidgetsProps) {
  const { upcomingTasks, monthlyExpenses, recentNotes } =
    await getDashboardData(userId);

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Upcoming Tasks */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Upcoming Tasks</CardTitle>
          <Link
            href="/tasks"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            View all
          </Link>
        </CardHeader>
        <CardContent>
          {upcomingTasks.length === 0 ? (
            <p className="text-sm text-slate-500">No upcoming tasks</p>
          ) : (
            <ul className="space-y-2">
              {upcomingTasks.map((task) => (
                <li key={task.id} className="flex items-center gap-2 text-sm">
                  <CheckSquare className="h-4 w-4 shrink-0 text-slate-400" />
                  <span className="truncate">{task.title}</span>
                  {task.dueDate && (
                    <span className="ml-auto shrink-0 text-slate-500">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Monthly Expenses */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">
            Monthly Expenses
          </CardTitle>
          <Link
            href="/finance"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            View all
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Wallet className="h-8 w-8 text-slate-400" />
            <div>
              <p className="text-2xl font-bold text-slate-900">
                ${monthlyExpenses.toFixed(2)}
              </p>
              <p className="text-sm text-slate-500">This month</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Notes */}
      <Card className="sm:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Recent Notes</CardTitle>
          <Link
            href="/notes"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            View all
          </Link>
        </CardHeader>
        <CardContent>
          {recentNotes.length === 0 ? (
            <p className="text-sm text-slate-500">No notes yet</p>
          ) : (
            <ul className="space-y-2">
              {recentNotes.map((note) => (
                <li key={note.id} className="flex items-start gap-2 text-sm">
                  <StickyNote className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <span className="truncate">{note.title}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
