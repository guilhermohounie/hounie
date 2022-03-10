// Node process environments variables
declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;
    NODE_ENV: "development" | "production";
  }
}
