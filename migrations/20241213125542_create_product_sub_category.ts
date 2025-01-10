import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tbl_cust_sub_category', function(table) {
        table.increments('id').primary(); // Auto-incrementing primary key
        table.integer('CatId').notNullable();
        table.string('Name').nullable(); // Nullable string
        table.string('Photo').nullable(); // Nullable string
        table.string('Status').nullable(); // Status as a string (e.g., "true" or "false")
        table.string('FrId').nullable();
        table.string('ProdType').nullable(); // 0: custcat, 1: rawcat
        table.string('CreatedBy').nullable();
        table.timestamp('CreatedDate').nullable(); // Nullable Date
        table.string('ModifiedBy').nullable();
        table.timestamp('ModifiedDate').nullable(); // Nullable Date
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('tbl_cust_sub_category');
}

