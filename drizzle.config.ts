import type { Config } from "drizzle-kit";

export default {
    schema: "./drizzle/schema.ts",
    out: "./drizzle",
    driver: "mysql2",
    dbCredentials: {
        connectionString:
            "mysql://root:zvKn5VqottN5hi8ZfbEr@containers-us-west-119.railway.app:8065/railway",
    },
} satisfies Config;
