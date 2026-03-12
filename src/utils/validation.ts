/**
 * Email validation - basic format check
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return 'Email is required';
  if (!isValidEmail(trimmed)) return 'Please enter a valid email address';
  return null;
}

/**
 * Password validation for registration
 */
export function validatePassword(password: string): string | null {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  return null;
}

export function validatePasswordConfirm(password: string, confirm: string): string | null {
  if (!confirm) return 'Please confirm your password';
  if (password !== confirm) return 'Passwords do not match';
  return null;
}

/**
 * Login form validation
 */
export function validateLoginForm(email: string, password: string): {
  email: string | null;
  password: string | null;
} {
  return {
    email: validateEmail(email),
    password: password.trim() ? null : 'Password is required',
  };
}

/**
 * Register form validation
 */
export function validateRegisterForm(data: {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
}): {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
} {
  return {
    email: validateEmail(data.email),
    password: validatePassword(data.password),
    confirmPassword: validatePasswordConfirm(data.password, data.confirmPassword),
  };
}
