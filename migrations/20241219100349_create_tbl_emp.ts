import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tbl_emp', function (table) {
        table.increments('id').primary();
        table.string('name', 100).nullable();
        table.string('phone', 20).nullable();
        table.string('email', 100).nullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('tbl_emp');
}

