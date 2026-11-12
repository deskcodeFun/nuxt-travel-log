// ./server/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import db from "./db/index";
import env from "./utils/env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  advanced: {
    database: {
      generateId: false, // "serial" for auto-incrementing numeric IDs
    },
  },
  socialProviders: {
    github: {
      clientId: env.DEV_GITHUB_CLIENT_ID,
      clientSecret: env.DEV_GITHUB_CLIENT_SECRET,
    },
  },
});
