import { Request, Response } from 'express';
import { create, destroy, get, edit, update} from "../../../models/billsoftadmin/selling-product/subcategory-model";
// Get all Category
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
      const listed = await get();
      res.json(listed);
    } catch (error) {
      console.error("Error fetching Category:", error);
      res.status(500).json({ message: "Failed to fetch Category" });
    }
  };

  // Create Category
export const createController = async (req: Request, res: Response): Promise<void> => {
  try {
    const created = await create(req.body);
    console.log("Category Created Successfully:", created);
    res.status(200).json(created);
  } catch (error) {
    console.error("Error creating Category:", error);
    res.status(500).json({ message: "Failed to create Category" });
  }
  };

  // Get Category by ID
export const editController = async (req: Request, res: Response): Promise<void> => {
  try {
    const edited = await edit(Number(req.params.id));
    if (!edited) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json(edited);
    }
  } catch (error) {
    console.error("Error fetching Category by ID:", error);
    res.status(500).json({ message: "Failed to fetch Category" });
  }
};

// Update Category
export const updateController = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await update(Number(req.params.id),req.body);
    console.log("Category Updated Successfully:", updated);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating Category", error);
    res.status(500).json({ message: "Failed to Updated Category" });
  }
  
};

// Delete Category
export const deleteController = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await destroy(Number(req.params.id));
    if (deleted) {
      res.status(204).json({ message: "delete Category successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.error("Error deleting Category:", error);
    res.status(500).json({ message: "Failed to delete Category" });
  }
};
  