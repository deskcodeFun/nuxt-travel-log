import type { z, ZodObject, ZodRawShape } from "zod";

import { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
): z.infer<ZodObject<T>> {
  try {
    return EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";
      error.issues.forEach((issue) => {
        message += `${issue.path.join(".")}: ${issue.message}\n`;
      });
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      console.error(error);
      throw error;
    }
  }
}
