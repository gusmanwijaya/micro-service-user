"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        name: "Gusman Wijaya",
        profession: "Fullstack Developer",
        role: "admin",
        email: "gusman.w.jaya@gmail.com",
        password: await bcrypt.hash("root", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Maheza Putri Amanda",
        profession: "Ners",
        role: "student",
        email: "maheza228@gmail.com",
        password: await bcrypt.hash("root", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
