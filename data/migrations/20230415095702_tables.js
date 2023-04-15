/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("email").notNullable().unique();
      tbl.string("fname").notNullable();
      tbl.string("lname").notNullable();
      tbl.string("password").notNullable();
      tbl.timestamp("registry_date").notNullable();
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("title").notNullable();
      tbl.string("description", 250);
      tbl.date("deadline").notNullable();
      tbl.string("importance").notNullable();
      tbl.string("tag").notNullable();
      tbl.string("status").notNullable();
      tbl.binary("image");
      tbl.binary("file");
      tbl
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks").dropTableIfExists("users");
};
