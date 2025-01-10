import { DataTypes, Model, Optional, QueryTypes } from "sequelize";
import { sequelize } from "../../../config/sequelize";
import {db} from "../../../config/knexconfig";
//import { Category } from "./Category";

// Define Category attributes
export interface CategoryAttributes {
    id: number;
    Name: string;
    Icon: string;
    Photo: string;
    Photo2: string;
    Featured: number;
    ProdType: number;
    Status: number;
    srno: number;
    CreatedDate: string;
    ModifiedDate: string;
    Roll: number;
    CreatedBy: number;
    push_flag: boolean;
    delete_flag: boolean;
    modified_time?: string | null;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> { }

// Define the Category model
export class Category
    extends Model<CategoryAttributes, CategoryCreationAttributes>
    implements CategoryAttributes {
    public id!: number;
    public Name!: string;
    public Icon!: string;
    public Photo!: string;
    public Photo2!: string;
    public Featured!: number;
    public ProdType!: number;
    public Status!: number;
    public srno!: number;
    public CreatedDate!: string;
    public ModifiedDate!: string;
    public Roll!: number;
    public CreatedBy!: number;
    public push_flag!: boolean;
    public delete_flag!: boolean;
    public modified_time?: string | null;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Icon: {
            type: DataTypes.STRING,
        },
        Photo: {
            type: DataTypes.STRING,
        },
        Photo2: {
            type: DataTypes.STRING,
        },
        Featured: {
            type: DataTypes.INTEGER,
        },
        ProdType: {
            type: DataTypes.INTEGER,
        },
        Status: {
            type: DataTypes.INTEGER,
        },
        srno: {
            type: DataTypes.INTEGER,
        },
        CreatedDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ModifiedDate: {
            type: DataTypes.DATE,
        },
        Roll: {
            type: DataTypes.INTEGER,
        },
        CreatedBy: {
            type: DataTypes.INTEGER,
        },
        push_flag: {
            type: DataTypes.BOOLEAN,
        },
        delete_flag: {
            type: DataTypes.BOOLEAN,
        },
        modified_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "tbl_cust_category",
        timestamps: false,
    }
);


export const get = async (): Promise<Category[]> => {
    return Category.findAll();
};

export const create = async (
    saveRecord: CategoryCreationAttributes
): Promise<Category> => {
    try {
        const newRecord = await Category.create(saveRecord);
        console.log("newRecord--------", newRecord);
        return newRecord;
    } catch (error) {
        console.error("Error creating Category:", error);
        throw error;
    }
};

//Get product by ID
export const edit = async (id: number): Promise<Category | null> => {
    return await Category.findByPk(id);
};


// Function to edit a category
// export const edit = async (id: number): Promise<Category | null> => {
//     try {
//         // Query the database and explicitly type the result
//         const categoryData: CategoryAttributes[] = await sequelize.query(
//             "CALL updateProdCategory(:id)",
//             {
//                 replacements: { id },
//                 type: QueryTypes.SELECT,
//             }
//         );

//         // Log categoryData to verify what is returned
//         console.log('categoryData:', categoryData);

//         // Check if categoryData is undefined or empty
//         if (!categoryData || categoryData.length === 0) {
//             console.log('No category data returned from the stored procedure');
//             return null;  // Return null if no data is found
//         }

//         const category = categoryData[0];  // Get the first item if it's an array
//         console.log('Invalid category data', category);
//         // Ensure the category has the correct structure
//         if (!category.id || !category.Name) {
//             console.log('Invalid category data', category);
//             return null;  // Return null if essential fields are missing
//         }

//         // Map categoryData to CategoryCreationAttributes
//         const categoryCreationAttributes = {
//             id: category.id,
//             Name: category.Name,
//             Icon: category.Icon,
//             Photo: category.Photo,
//             Photo2: category.Photo2,
//             Featured: category.Featured,
//             ProdType: category.ProdType,
//             Status: category.Status,
//             srno: category.srno,
//             CreatedDate: category.CreatedDate,
//             ModifiedDate: category.ModifiedDate,
//             Roll: category.Roll,
//             CreatedBy: category.CreatedBy,
//             push_flag: category.push_flag,
//             delete_flag: category.delete_flag,
//             modified_time: category.modified_time || null,
//         };

//         // Build and return the Category instance
//         return Category.build(categoryCreationAttributes as any);
//     } catch (error) {
//         console.error("Error fetching category by ID:", error);
//         throw error;
//     }
// };

//  export const edit = async (id: number) => {
//     try {
//       // Call stored procedure using knexInstance.raw()
//       const result = await db.raw('CALL updateProdCategory(?)', [id]);
//       console.log('Category Data:', result[0]);
//       if (result && result[0]) {
//         console.log('Category Data:', result[0]);
//         return result[0];  // Assuming result[0] contains the data
//       } else {
//         console.log('No data returned from stored procedure.');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error calling stored procedure:', error);
//       throw error;
//     }
//   };

export const update = async (
    id: number,
    updates: Partial<CategoryAttributes>
): Promise<Category | null> => {
    const [rowsAffected, [updatedRecord]] = await Category.update(updates, {
        where: { id },
        returning: true,
    });
    return rowsAffected > 0 ? updatedRecord : null;
};

export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await Category.destroy({ where: { id } });
    return deletedCount > 0;
};

