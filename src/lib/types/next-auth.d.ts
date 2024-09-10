import type { User } from 'kin';

declare module 'next-auth' {
  export interface DefaultSession {
    user: User;
    error?: 'RefreshAccessTokenError';
  }

  export interface Session {
    user: User;
    error?: 'RefreshAccessTokenError';
  }
}

declare module 'next-auth/jwt' {
  export interface DefaultJWT {
    user?: User;
    error?: 'RefreshAccessTokenError';
  }

  export interface JWT {
    user?: User;
    error?: 'RefreshAccessTokenError';
  }
}
