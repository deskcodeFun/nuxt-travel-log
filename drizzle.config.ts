// at root drizzle configuration
import { defineConfig } from "drizzle-kit";

import env from "./server/utils/env";

export default defineConfig({
  out: "./server/db/migrations",
  schema: "./server/db/schema/index.ts",
  casing: "snake_case",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development"
      ? undefined
      : env.TURSO_AUTH_TOKEN,
  },
});
