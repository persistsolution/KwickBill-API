import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tbl_cash_book', function (table) {
        table.increments('id').primary(); // Auto incrementing id
        table.integer('FrId').notNullable();
        table.date('FromDate').defaultTo(null);
        table.date('ToDate').defaultTo(null);
        table.float('TotalAmount', 14, 2).defaultTo(null);
        table.float('Amount', 14, 2).defaultTo(null);
        table.float('BalAmt', 14, 2).defaultTo(null);
        table.date('TransferDate').defaultTo(null);
        table.integer('BankId').notNullable();
        table.string('BankName', 255).defaultTo(null);
        table.string('AccountNo', 255).defaultTo(null);
        table.string('Files', 255).defaultTo(null);
        table.text('Narration').defaultTo(null);
        table.boolean('ApproveStatus').notNullable();
        table.date('ApproveDate').defaultTo(null);
        table.integer('ApproveBy').notNullable();
        table.text('ApproveComment').defaultTo(null);
        table.integer('CreatedBy').notNullable();
        table.date('CreatedDate').defaultTo(null);
        table.integer('ModifiedBy').notNullable();
        table.date('ModifiedDate').defaultTo(null);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('tbl_cash_book');
}

