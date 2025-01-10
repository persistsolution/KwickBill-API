import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/sequelize"; // Adjust path for your Sequelize instance

// Define attributes
interface EmployeeAttributes {
    id: number;
    CustomerId?: string;
    ColgId?: string;
    ShopName?: string;
    Fname: string;
    Mname?: string;
    Lname?: string;
    Phone: string;
    Phone2?: string;
    EmailId?: string;
    Password: string;
    CountryId: string;
    StateId: string;
    CityId: string;
    AreaId?: string;
    Address: string;
    Pincode?: string;
    Photo?: string;
    Photo2?: string;
    Photo3?: string;
    GstNo?: string;
    PanNo?: string;
    Roll: string;
    Status: string;
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDate: Date;
    ModifiedDate?: Date;
    // ... (other fields remain unchanged)
}

// Optional attributes for creation
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, "id"> { }

// Sequelize Model
class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    public id!: number;
    public Fname!: string;
    public Phone!: string;
    public Password!: string;
    public CountryId!: string;
    public StateId!: string;
    public CityId!: string;
    public Address!: string;
    public Roll!: string;
    public Status!: string;
    public CreatedBy!: string;
    public CreatedDate!: Date;
    public ModifiedBy!: string;
    public ModifiedDate?: Date;
}

Employee.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        Fname: { type: DataTypes.STRING, allowNull: false },
        Phone: { type: DataTypes.STRING, allowNull: false },
        Password: { type: DataTypes.STRING, allowNull: false },
        CountryId: { type: DataTypes.STRING, allowNull: false },
        StateId: { type: DataTypes.STRING, allowNull: false },
        CityId: { type: DataTypes.STRING, allowNull: false },
        Address: { type: DataTypes.STRING, allowNull: false },
        Roll: { type: DataTypes.STRING, allowNull: false },
        Status: { type: DataTypes.STRING, allowNull: false },
        CreatedBy: { type: DataTypes.STRING, allowNull: false },
        CreatedDate: { type: DataTypes.DATE, allowNull: false },
        ModifiedBy: { type: DataTypes.STRING },
        ModifiedDate: { type: DataTypes.DATE },
    },
    {
        sequelize,
        tableName: "tbl_users_bill",
        timestamps: false, // Set to false if no Sequelize timestamps are used
    }
);

export const get = async (roll: number): Promise<Employee[]> => {
    return await Employee.findAll({
        where: { Roll: roll },
    });
};

export const create = async (saveRecord: EmployeeCreationAttributes): Promise<Employee> => {
    const newRecord = await Employee.create(saveRecord);
    console.log("newRecord--------", newRecord);
    return newRecord;
};


export const edit = async (id: number): Promise<Employee | null> => {
    return await Employee.findByPk(id);
};

export const update = async (id: number, updates: Partial<EmployeeAttributes>): Promise<Employee | null> => {
    const [affectedRows, [updatedRecord]] = await Employee.update(updates, {
        where: { id },
        returning: true,
    });

    return affectedRows > 0 ? updatedRecord : null;
};

export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await Employee.destroy({
        where: { id },
    });

    return deletedCount > 0;
};
