/**
 * Paths that require authentication
 */
export const protectedPaths = ['/tasks', '/finance', '/notes'];

/**
 * Paths that should redirect to home if already authenticated
 */
export const authPaths = ['/login', '/register'];
