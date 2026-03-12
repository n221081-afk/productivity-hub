import { prisma } from './prisma';

export async function getDashboardData(userId: string) {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [upcomingTasks, monthlyExpenses, recentNotes] = await Promise.all([
    prisma.task.findMany({
      where: {
        userId,
        completed: false,
        dueDate: { gte: now },
      },
      orderBy: { dueDate: 'asc' },
      take: 5,
    }),
    prisma.transaction.aggregate({
      where: {
        userId,
        type: 'expense',
        date: { gte: startOfMonth },
      },
      _sum: { amount: true },
    }),
    prisma.note.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      take: 5,
    }),
  ]);

  return {
    upcomingTasks,
    monthlyExpenses: Number(monthlyExpenses._sum.amount ?? 0),
    recentNotes,
  };
}
