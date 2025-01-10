import { Request, Response } from 'express';
import { create, destroy, get, edit, update} from "../../../models/billsoftadmin/franchise/franchise-model";
// Get all Franchise
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
        let roll = 4;
      const listed = await get(roll);
      res.json(listed);
    } catch (error) {
      console.error("Error fetching Franchise:", error);
      res.status(500).json({ message: "Failed to fetch Franchise" });
    }
  };

  // Create Franchise
export const createController = async (req: Request, res: Response): Promise<void> => {
  try {
    const created = await create(req.body);
    console.log("Franchise Created Successfully:", created);
    res.status(200).json(created);
  } catch (error) {
    console.error("Error creating Franchise:", error);
    res.status(500).json({ message: "Failed to create Franchise" });
  }
  };

  // Get Franchise by ID
export const editController = async (req: Request, res: Response): Promise<void> => {
  try {
    const edited = await edit(Number(req.params.id));
    if (!edited) {
      res.status(404).json({ message: "Franchise not found" });
    } else {
      res.json(edited);
    }
  } catch (error) {
    console.error("Error fetching Franchise by ID:", error);
    res.status(500).json({ message: "Failed to fetch Franchise" });
  }
};

// Update Franchise
export const updateController = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await update(Number(req.params.id),req.body);
    console.log("Franchise Updated Successfully:", updated);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating Franchise", error);
    res.status(500).json({ message: "Failed to Updated Franchise" });
  }
  
};

// Delete Franchise
export const deleteController = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await destroy(Number(req.params.id));
    if (deleted) {
      res.status(204).json({ message: "delete Franchise successfully" });
    } else {
      res.status(404).json({ message: "Franchise not found" });
    }
  } catch (error) {
    console.error("Error deleting Franchise:", error);
    res.status(500).json({ message: "Failed to delete Franchise" });
  }
};
  