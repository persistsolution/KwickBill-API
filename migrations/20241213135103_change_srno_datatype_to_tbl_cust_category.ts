import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('tbl_cust_category', function(table) {
        table.decimal('SrNo', 10, 2).nullable();
      });
   
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('tbl_cust_category', function(table) {
        table.dropColumn('SrNo'); 
      });
}

