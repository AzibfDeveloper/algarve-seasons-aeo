CREATE TABLE `quoteRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`customerEmail` varchar(320) NOT NULL,
	`customerPhone` varchar(20) NOT NULL,
	`serviceType` enum('air-conditioning','solar','heat-pump','multiple') NOT NULL,
	`propertyType` enum('villa','apartment','house','commercial','other') NOT NULL,
	`propertySize` varchar(50),
	`location` varchar(255) NOT NULL,
	`description` text,
	`photoFileKey` varchar(255),
	`photoUrl` varchar(255),
	`status` enum('new','contacted','quoted','closed') NOT NULL DEFAULT 'new',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quoteRequests_id` PRIMARY KEY(`id`)
);
