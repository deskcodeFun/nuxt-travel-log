// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

import env from "./app/utils/env";

export default defineConfig({
  out: './app/utils/db/migrations',
  schema: './app/utils/db/schema/index.ts',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined: env.TURSO_AUTH_TOKEN,
  },
});