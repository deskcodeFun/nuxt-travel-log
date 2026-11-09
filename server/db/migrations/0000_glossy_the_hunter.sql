CREATE TABLE `locaiton` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`lat` real NOT NULL,
	`long` real NOT NULL,
	`create_at` integer NOT NULL,
	`update_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `locaiton_slug_unique` ON `locaiton` (`slug`);--> statement-breakpoint
CREATE TABLE `locationLog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`started_at` integer NOT NULL,
	`end_at` integer NOT NULL,
	`lat` real NOT NULL,
	`long` real NOT NULL,
	`location_id` integer NOT NULL,
	`create_at` integer NOT NULL,
	`update_at` integer NOT NULL,
	FOREIGN KEY (`location_id`) REFERENCES `locaiton`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `locationLogImage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`key` text NOT NULL,
	`location_id` integer NOT NULL,
	`create_at` integer NOT NULL,
	`update_at` integer NOT NULL,
	FOREIGN KEY (`location_id`) REFERENCES `locationLog`(`id`) ON UPDATE no action ON DELETE no action
);
