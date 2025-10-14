// Client-side authentication for static export
export interface User {
  id: string;
  name: string;
  email: string;
}

const USERS_KEY = 'wett_users';
const SESSION_KEY = 'wett_session';

export const authService = {
  register: (name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    if (users.find((u: User & { password: string }) => u.email === email)) {
      return false;
    }
    
    const newUser = { id: Date.now().toString(), name, email, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  },

  login: (email: string, password: string): User | null => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find((u: User & { password: string }) => 
      u.email === email && u.password === password
    );
    
    if (user) {
      const { password, ...userWithoutPassword } = user;
      localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    }
    
    return null;
  },

  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  getSession: (): User | null => {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }
};
