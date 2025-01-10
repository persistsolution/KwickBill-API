import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tbl_cust_products', function (table) {
        table.increments('id').primary(); // Auto-incrementing primary key
        table.integer('ProdId').nullable();
        table.string('ProductName').nullable(); // Nullable string
        table.integer('CatId').nullable();
        table.string('SubCatId').nullable();
        table.string('CgstPer').nullable();
        table.string('SgstPer').nullable();
        table.string('IgstPer').nullable();
        table.decimal('CgstAmt', 10, 2).nullable(); // Nullable decimal
        table.decimal('SgstAmt', 10, 2).nullable(); // Nullable decimal
        table.decimal('IgstAmt', 10, 2).nullable(); // Nullable decimal
        table.decimal('GstAmt', 10, 2).nullable(); // Nullable decimal
        table.decimal('ProdPrice', 10, 2).nullable(); // Nullable decimal
        table.decimal('MinPrice', 10, 2).nullable(); // Nullable decimal
        table.string('Status').nullable().defaultTo(1); // Status as a string
        table.decimal('SrNo', 10, 2).nullable(); // Nullable integer
        table.string('Photo').nullable(); // Nullable string
        table.string('code').nullable(); // Nullable string
        table.timestamp('CreatedDate').nullable(); // Nullable timestamp
        table.timestamp('ModifiedDate').nullable(); // Nullable timestamp
        table.integer('CreatedBy').nullable();
        table.integer('ModifiedBy').nullable();
        table.string('BarcodeNo').nullable(); // Nullable string
        table.integer('StockQty').nullable();
        table.integer('TempPrdId').nullable();
        table.string('Display').nullable(); // string
        table.string('push_flag').nullable(); // string
        table.string('delete_flag').nullable(); // string
        table.timestamp('modified_time').nullable(); // Nullable timestamp
        table.string('ProdType').nullable(); // Cust Product (0) or Raw Product (1)
        table.string('Qty').nullable(); // Nullable string
        table.string('Unit').nullable(); // Nullable string
        table.string('Transfer').nullable(); // string
        table.string('Assets').nullable(); // string
        table.string('QrDisplay').nullable();
        table.string('MinQty').nullable(); // Nullable string
        table.string('ProdType2').nullable().defaultTo(0); // string
        table.decimal('PurchasePrice', 10, 2).nullable(); // Nullable decimal
        table.string('checkstatus').nullable().defaultTo(0); // string
        table.string('tempstatus').nullable().defaultTo(0); // string

    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('tbl_cust_products');
}

