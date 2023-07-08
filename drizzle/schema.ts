import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, foreignKey, int, varchar, text, tinyint, datetime, uniqueIndex } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const post = mysqlTable("Post", {
	id: int("id").autoincrement().primaryKey().notNull(),
	title: varchar("title", { length: 191 }).notNull(),
	content: text("content"),
	published: tinyint("published").default(0).notNull(),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`(CURRENT_TIMESTAMP(3))`).notNull(),
	updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
	authorId: int("authorId").references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" } ),
},
(table) => {
	return {
		authorIdFkey: index("Post_authorId_fkey").on(table.authorId),
	}
});

export const user = mysqlTable("User", {
	id: int("id").autoincrement().primaryKey().notNull(),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`(CURRENT_TIMESTAMP(3))`).notNull(),
	updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
	email: varchar("email", { length: 191 }).notNull(),
	username: varchar("username", { length: 191 }).notNull(),
	avatar: varchar("avatar", { length: 191 }),
	name: varchar("name", { length: 191 }),
},
(table) => {
	return {
		emailKey: uniqueIndex("User_email_key").on(table.email),
		usernameKey: uniqueIndex("User_username_key").on(table.username),
	}
});