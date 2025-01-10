import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/sequelize"; // Adjust path for your Sequelize instance

// Define attributes
interface UserAttributes {
    id: number;
    name?: string;
    phone?: string;
    email?: string;
    
}

// Optional attributes for creation
interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

// Sequelize Model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public phone!: string;
    public email!: string;
}

User.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize,
        tableName: "tbl_emp",
        timestamps: false, // Set to false if no Sequelize timestamps are used
    }
);

export const get = async (): Promise<User[]> => {
    return await User.findAll();
};

export const create = async (saveRecord: UserCreationAttributes): Promise<User> => {
    const newRecord = await User.create(saveRecord);
    console.log("newRecord--------", newRecord);
    return newRecord;
};


export const edit = async (id: number): Promise<User | null> => {
    return await User.findByPk(id);
};

export const update = async (id: number, updates: Partial<UserAttributes>): Promise<User | null> => {
    const [affectedRows, [updatedRecord]] = await User.update(updates, {
        where: { id },
        returning: true,
    });

    return affectedRows > 0 ? updatedRecord : null;
};

export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await User.destroy({
        where: { id },
    });

    return deletedCount > 0;
};
