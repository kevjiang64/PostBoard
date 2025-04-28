import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "postgres",
  type: "postgresql",
  username: "postgres",
  password: "Kevin@12345",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
