-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Post` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` varchar(191) NOT NULL,
	`content` text,
	`published` tinyint NOT NULL DEFAULT 0,
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL,
	`authorId` int);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL,
	`email` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`avatar` varchar(191),
	`name` varchar(191));
--> statement-breakpoint
CREATE INDEX `Post_authorId_fkey` ON `Post` (`authorId`);--> statement-breakpoint
CREATE UNIQUE INDEX `User_email_key` ON `User` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `User_username_key` ON `User` (`username`);--> statement-breakpoint
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;
*/