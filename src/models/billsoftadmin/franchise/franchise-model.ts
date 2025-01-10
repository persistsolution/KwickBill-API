import { db } from "../../../config/knexconfig";

export interface Franchise {
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
    Options?: string;
    BranchId?: string;
    Dob?: Date;
    Area?: string;
    UserType: string;
    PayMode?: string;
    UnderUser: string;
    Lattitude?: string;
    Longitude?: string;
    AadharNo?: string;
    AadharCard?: string;
    AadharCard2?: string;
    PanCard?: string;
    PanCard2?: string;
    GstCertificate?: string;
    AccountName?: string;
    BankName?: string;
    AccountNo?: string;
    IfscCode?: string;
    Branch?: string;
    UpiNo?: string;
    GumastaNo?: string;
    Gumasta?: string;
    MsmeNo?: string;
    Msme?: string;
    InspectionDate?: Date;
    CommissioningDate?: Date;
    CustType: string;
    Details?: string;
    CatId: string;
    CompName?: string;
    CompAddress?: string;
    CompPhone?: string;
    AuthorName?: string;
    Tokens?: string;
    CompId: string;
    FatherPhone?: string;
    Designation?: string;
    BloodGroup?: string;
    JoinDate?: Date;
    EmailId2?: string;
    PerDaySalary?: number;
    Barcode?: string;
    KycStatus: string;
    KycDate?: Date;
    Profession?: string;
    FsiicNo?: string;
    ShopActNo?: string;
    AnniversaryDate?: Date;
    ExeId: string;
    SellAmt?: number;
    SellDate?: Date;
    UnderFr: string;
    ReportingMgr: string;
    ResignStatus: string;
    ResignDate?: Date;
    ResignComment?: string;
    BillSoftFrId: string;
    PkgId: string;
    PkgAmt?: number;
    PkgDiscount?: number;
    PkgDate?: Date;
    PkgValidity?: Date;
    Prime: string;
    terms_condition?: string;
    bottom_title?: string;
    ReferCode?: string;
    OwnFranchise?: string;
    PrintCompName?: string;
    PrintMobNo?: string;
    TableQrCode?: string;
    FoodLicence?: string;
    FoodLicenceReceipt?: string;
    AgreementCopy?: string;
    SalaryType: string;
    CreditSalaryStatus: string;
    IdStatus: string;
    zone?: string;
    CocoFranchiseAccess?: string;
    CinNo?: string;
    push_flag: string;
    delete_flag: string;
    modified_time?: Date;
    UnderFrId: string;
    Location?: string;
    ShowFrStatus: string;
    ReferalNo1?: string;
    ReferalNo2?: string;
    NomineePartnerName?: string;
    NomineePartnerRelation?: string;
    NomineePartnerPhone?: string;
    BillAmount?: number;
    ExpCatId?: string;
    MainBrEmp: string;
    ExpApproval: string;
    UnderByUser: string;
    DeliveryPerson: string;
    ChequeBook?: string;
    TradeName?: string;
    TypeOfVendor: string;
    AllocateProd?: string;
    AllocateRawProd?: string;
}


// Get all categories
export const get = async (roll:number): Promise<Franchise[]> => {
    return db("tbl_users_bill").where({
        Roll: roll
      }).select("*");
};

// Create a category
export const create = async (saveRecord: Partial<Franchise>): Promise<Franchise> => {
    const [newRecord] = await db("tbl_users_bill").insert(saveRecord).returning("*");
    console.log("newRecord--------", newRecord);
    return newRecord;
};

// Get category by ID
export const edit = async (id: number): Promise<Franchise | undefined> => {
    return db("tbl_users_bill").where({ id }).first();
};


// Update category by ID
export const update = async (id: number, updates: Partial<Franchise>): Promise<Franchise | undefined> => {
    const [updatedRecord] = await db("tbl_users_bill")
        .where({ id })
        .update(updates)
        .returning("*");
    return updatedRecord;
};

// Delete category by ID
export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await db("tbl_users_bill").where({ id }).del();
    return deletedCount > 0;
};


