"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250423032857 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250423032857 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20250423032857 = Migration20250423032857;
//# sourceMappingURL=Migration20250423032857.js.map