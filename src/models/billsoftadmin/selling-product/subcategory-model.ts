import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../../config/sequelize'; // Your Sequelize config file

interface SubCategoryAttributes {
  id: number;
  CatId: number;
  Name?: string | null;
  Photo?: string | null;
  Status: string;
  FrId: string;
  ProdType: string;
  CreatedBy: string;
  CreatedDate?: Date | null;
  ModifiedBy: string;
  ModifiedDate?: Date | null;
}

// Define a type for creation attributes (all fields except `id` are optional on creation)
interface SubCategoryCreationAttributes extends Optional<SubCategoryAttributes, 'id'> { }

// Define the Sequelize model class
export class SubCategory extends Model<SubCategoryAttributes, SubCategoryCreationAttributes> implements SubCategoryAttributes {
  public id!: number;
  public CatId!: number;
  public Name?: string | null;
  public Photo?: string | null;
  public Status!: string;
  public FrId!: string;
  public ProdType!: string;
  public CreatedBy!: string;
  public CreatedDate?: Date | null;
  public ModifiedBy!: string;
  public ModifiedDate?: Date | null;
}

// Initialize the model
SubCategory.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    CatId: { type: DataTypes.INTEGER, allowNull: false },
    Name: { type: DataTypes.STRING, allowNull: true },
    Photo: { type: DataTypes.STRING, allowNull: true },
    Status: { type: DataTypes.STRING, allowNull: false },
    FrId: { type: DataTypes.STRING, allowNull: false },
    ProdType: { type: DataTypes.STRING, allowNull: false },
    CreatedBy: { type: DataTypes.STRING, allowNull: false },
    CreatedDate: { type: DataTypes.DATE, allowNull: true },
    ModifiedBy: { type: DataTypes.STRING, allowNull: false },
    ModifiedDate: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize,
    tableName: 'tbl_cust_sub_category',
    timestamps: false, // Adjust as needed if your table has timestamps
  }
);

// Get all categories
export const get = async (): Promise<SubCategory[]> => {
  return await SubCategory.findAll();
};

// Create a category
export const create = async (saveCategory: SubCategoryCreationAttributes): Promise<SubCategory> => {
  const newCategory = await SubCategory.create(saveCategory);
  console.log('New Category:', newCategory.toJSON());
  return newCategory;
};

// Get category by ID
export const edit = async (id: number): Promise<SubCategory | null> => {
  return await SubCategory.findByPk(id);
};

// Update category by ID
export const update = async (id: number, updates: Partial<SubCategory>): Promise<SubCategory | null> => {
  const category = await SubCategory.findByPk(id);
  if (category) {
    await category.update(updates);
    return category;
  }
  return null;
};

// Delete category by ID
export const destroy = async (id: number): Promise<boolean> => {
  const deletedCount = await SubCategory.destroy({ where: { id } });
  return deletedCount > 0;
};


