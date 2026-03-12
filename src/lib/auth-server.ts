import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

/**
 * Get the current session in Server Components or API routes
 */
export async function getSession() {
  return getServerSession(authOptions);
}
