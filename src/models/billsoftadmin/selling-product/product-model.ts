import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../../config/sequelize'; // Adjust path to your Sequelize instance

// Interface for Product attributes
interface ProductAttributes {
    id: number;
    ProdId: number;
    ProductName?: string | null;
    CatId: number;
    SubCatId: string;
    CgstPer?: string | null;
    SgstPer?: string | null;
    IgstPer?: string | null;
    CgstAmt?: number | null;
    SgstAmt?: number | null;
    IgstAmt?: number | null;
    GstAmt?: number | null;
    ProdPrice?: number | null;
    MinPrice?: number | null;
    Status: string;
    SrNo?: number | null;
    Photo?: string | null;
    code?: string | null;
    CreatedDate?: Date | null;
    ModifiedDate?: Date | null;
    CreatedBy: number;
    ModifiedBy: number;
    BarcodeNo?: string | null;
    StockQty: number;
    TempPrdId: number;
    Display: boolean;
    push_flag: boolean;
    delete_flag: boolean;
    modified_time?: Date | null;
    ProdType: string;
    Qty?: string | null;
    Unit?: string | null;
    Transfer: boolean;
    Assets: boolean;
    QrDisplay: string;
    MinQty?: string | null;
    ProdType2: boolean;
    PurchasePrice?: number | null;
    checkstatus: boolean;
    tempstatus: boolean;
}

// Define attributes for Product creation (all fields except `id` are optional)
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

// Define the Product model class
export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: number;
    public ProdId!: number;
    public ProductName?: string | null;
    public CatId!: number;
    public SubCatId!: string;
    public CgstPer?: string | null;
    public SgstPer?: string | null;
    public IgstPer?: string | null;
    public CgstAmt?: number | null;
    public SgstAmt?: number | null;
    public IgstAmt?: number | null;
    public GstAmt?: number | null;
    public ProdPrice?: number | null;
    public MinPrice?: number | null;
    public Status!: string;
    public SrNo?: number | null;
    public Photo?: string | null;
    public code?: string | null;
    public CreatedDate?: Date | null;
    public ModifiedDate?: Date | null;
    public CreatedBy!: number;
    public ModifiedBy!: number;
    public BarcodeNo?: string | null;
    public StockQty!: number;
    public TempPrdId!: number;
    public Display!: boolean;
    public push_flag!: boolean;
    public delete_flag!: boolean;
    public modified_time?: Date | null;
    public ProdType!: string;
    public Qty?: string | null;
    public Unit?: string | null;
    public Transfer!: boolean;
    public Assets!: boolean;
    public QrDisplay!: string;
    public MinQty?: string | null;
    public ProdType2!: boolean;
    public PurchasePrice?: number | null;
    public checkstatus!: boolean;
    public tempstatus!: boolean;
}

// Initialize the model
Product.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        ProdId: { type: DataTypes.INTEGER, allowNull: false },
        ProductName: { type: DataTypes.STRING, allowNull: true },
        CatId: { type: DataTypes.INTEGER, allowNull: false },
        SubCatId: { type: DataTypes.STRING, allowNull: false },
        CgstPer: { type: DataTypes.STRING, allowNull: true },
        SgstPer: { type: DataTypes.STRING, allowNull: true },
        IgstPer: { type: DataTypes.STRING, allowNull: true },
        CgstAmt: { type: DataTypes.FLOAT, allowNull: true },
        SgstAmt: { type: DataTypes.FLOAT, allowNull: true },
        IgstAmt: { type: DataTypes.FLOAT, allowNull: true },
        GstAmt: { type: DataTypes.FLOAT, allowNull: true },
        ProdPrice: { type: DataTypes.FLOAT, allowNull: true },
        MinPrice: { type: DataTypes.FLOAT, allowNull: true },
        Status: { type: DataTypes.STRING, allowNull: false },
        SrNo: { type: DataTypes.INTEGER, allowNull: true },
        Photo: { type: DataTypes.STRING, allowNull: true },
        code: { type: DataTypes.STRING, allowNull: true },
        CreatedDate: { type: DataTypes.DATE, allowNull: true },
        ModifiedDate: { type: DataTypes.DATE, allowNull: true },
        CreatedBy: { type: DataTypes.INTEGER, allowNull: false },
        ModifiedBy: { type: DataTypes.INTEGER, allowNull: false },
        BarcodeNo: { type: DataTypes.STRING, allowNull: true },
        StockQty: { type: DataTypes.INTEGER, allowNull: false },
        TempPrdId: { type: DataTypes.INTEGER, allowNull: false },
        Display: { type: DataTypes.BOOLEAN, allowNull: false },
        push_flag: { type: DataTypes.BOOLEAN, allowNull: false },
        delete_flag: { type: DataTypes.BOOLEAN, allowNull: false },
        modified_time: { type: DataTypes.DATE, allowNull: true },
        ProdType: { type: DataTypes.STRING, allowNull: false },
        Qty: { type: DataTypes.STRING, allowNull: true },
        Unit: { type: DataTypes.STRING, allowNull: true },
        Transfer: { type: DataTypes.BOOLEAN, allowNull: false },
        Assets: { type: DataTypes.BOOLEAN, allowNull: false },
        QrDisplay: { type: DataTypes.STRING, allowNull: false },
        MinQty: { type: DataTypes.STRING, allowNull: true },
        ProdType2: { type: DataTypes.BOOLEAN, allowNull: false },
        PurchasePrice: { type: DataTypes.FLOAT, allowNull: true },
        checkstatus: { type: DataTypes.BOOLEAN, allowNull: false },
        tempstatus: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
        sequelize,
        tableName: 'tbl_cust_products',
        timestamps: false, // Adjust if your table has createdAt/updatedAt fields
    }
);


// Get all products
export const get = async (): Promise<Product[]> => {
    return await Product.findAll();
};

// Create a product
export const create = async (saveRecord: ProductCreationAttributes): Promise<Product> => {
    const newRecord = await Product.create(saveRecord);
    console.log('New Product:', newRecord.toJSON());
    return newRecord;
};

// Get product by ID
export const edit = async (id: number): Promise<Product | null> => {
    return await Product.findByPk(id);
};

// Update product by ID
export const update = async (id: number, updates: Partial<Product>): Promise<Product | null> => {
    const product = await Product.findByPk(id);
    if (product) {
        await product.update(updates);
        return product;
    }
    return null;
};

// Delete product by ID
export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await Product.destroy({ where: { id } });
    return deletedCount > 0;
};