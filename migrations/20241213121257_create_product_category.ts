import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tbl_cust_category', function(table) {
        table.increments('id').primary(); // Auto-incrementing primary key
        table.string('Name').nullable();
        table.string('Icon').nullable();
        table.string('Photo').nullable();
        table.string('Photo2').nullable();
        table.integer('Featured').nullable();
        table.integer('ProdType').nullable();
        table.integer('Status').nullable();
        table.string('srno').nullable();
        table.timestamp('CreatedDate').nullable(); // ISO 8601 format
        table.timestamp('ModifiedDate').nullable();
        table.integer('Roll').nullable();
        table.integer('CreatedBy').nullable();
        table.string('push_flag').nullable().defaultTo(0);
        table.string('delete_flag').nullable().defaultTo(0);
        table.timestamp('modified_time').nullable(); // Optional and nullable
        table.string('ModifiedBy').nullable();
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('tbl_cust_category');
}

