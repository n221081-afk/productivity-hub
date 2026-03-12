import { cn } from '@/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper for page content with consistent spacing and max-width
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
