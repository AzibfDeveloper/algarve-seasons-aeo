CREATE TABLE `emailLogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quoteRequestId` int,
	`recipientEmail` varchar(320) NOT NULL,
	`emailType` enum('customer-confirmation','admin-notification','quote-response') NOT NULL,
	`subject` varchar(255) NOT NULL,
	`status` enum('sent','failed','pending') NOT NULL DEFAULT 'pending',
	`errorMessage` text,
	`sentAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `emailLogs_id` PRIMARY KEY(`id`)
);
