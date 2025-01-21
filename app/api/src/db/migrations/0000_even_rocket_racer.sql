CREATE TABLE `books` (
	`id` int AUTO_INCREMENT NOT NULL,
	`file` varchar(3) NOT NULL,
	`judul` varchar(3) NOT NULL,
	`deskripsi` text NOT NULL,
	`penerbit` varchar(3) NOT NULL,
	`pengarang` varchar(3) NOT NULL,
	`pengarang1` varchar(3) NOT NULL,
	`tahun` char(1) NOT NULL,
	`kategori_id` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `books_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `kategori` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nama` varchar(3) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `kategori_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `logbook` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`book_id` int NOT NULL,
	`action` varchar(3) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `logbook_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nama_lengkap` varchar(3) NOT NULL,
	`username` varchar(3) NOT NULL,
	`password` varchar(3) NOT NULL,
	`role` varchar(2) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `books` ADD CONSTRAINT `books_kategori_id_kategori_id_fk` FOREIGN KEY (`kategori_id`) REFERENCES `kategori`(`id`) ON DELETE no action ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `logbook` ADD CONSTRAINT `logbook_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `logbook` ADD CONSTRAINT `logbook_book_id_books_id_fk` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE no action ON UPDATE cascade;