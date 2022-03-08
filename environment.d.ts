// Node process environments variables
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXTAUTH_URL: string;
    PORT?: number;
    NODE_ENV: "development" | "production";
  }
}
