exports.up = function ({ schema }) {
  return schema.createTable("Task", function (table) {
    table.increments("id").notNullable();
    table.string("endPoint");

    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(new Date().toUTCString());
    table.timestamp("do_task").notNullable();

    table.boolean("queued").notNullable().defaultTo(false);
    table.boolean("done").notNullable().defaultTo(false);
  });
};

exports.down = function ({ schema }) {
  return schema.dropTable("Task");
};
