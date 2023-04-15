/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").truncate();
  await knex("users").truncate();
  await knex("users").insert([
    {
      email: "test@test.com",
      fname: "fname",
      lname: "lname",
      password: "1234",
      registry_date: "01.01.2023",
    },
    {
      email: "test2@test.com",
      fname: "fname2",
      lname: "lname2",
      password: "1234",
      registry_date: "02.01.2023",
    },
  ]);
  await knex("tasks").insert([
    {
      title: "test title",
      description: "test description",
      deadline: "04.01.2023",
      importance: "high",
      tag: "test tag",
      status: "toDo",
      user_id: 1,
    },
  ]);
};
