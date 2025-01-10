import { Request, Response } from 'express';
import { create, destroy, get, edit, update} from "../../../models/billsoftadmin/users/user-model";
// Get all User
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
      let roll = 63
      const listed = await get();
      res.json(listed);
    } catch (error) {
      console.error("Error fetching User:", error);
      res.status(500).json({ message: "Failed to fetch User" });
    }
  };

  // Create User
export const createController = async (req: Request, res: Response): Promise<void> => {
  try {
    const created = await create(req.body);
    console.log("User Created Successfully:", created);
    res.status(200).json(created);
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json({ message: "Failed to create User" });
  }
  };

  // Get User by ID
export const editController = async (req: Request, res: Response): Promise<void> => {
  try {
    const edited = await edit(Number(req.params.id));
    if (!edited) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(edited);
    }
  } catch (error) {
    console.error("Error fetching User by ID:", error);
    res.status(500).json({ message: "Failed to fetch User" });
  }
};

// Update User
export const updateController = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await update(Number(req.params.id),req.body);
    console.log("User Updated Successfully:", updated);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating User", error);
    res.status(500).json({ message: "Failed to Updated User" });
  }
  
};

// Delete User
export const deleteController = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await destroy(Number(req.params.id));
    if (deleted) {
      res.status(204).json({ message: "delete User successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting User:", error);
    res.status(500).json({ message: "Failed to delete User" });
  }
};
  