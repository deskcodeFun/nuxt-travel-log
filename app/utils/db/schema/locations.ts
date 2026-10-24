// ./app/utils/db/schema/locations.ts
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const locations = sqliteTable("locaitons", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});
