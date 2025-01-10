import { Request, Response } from 'express';
import { create, destroy, get, edit, update} from "../../../models/billsoftadmin/employee/employee-model";
// Get all Employee
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
      let roll = 63
      const listed = await get(roll);
      res.json(listed);
    } catch (error) {
      console.error("Error fetching Employee:", error);
      res.status(500).json({ message: "Failed to fetch Employee" });
    }
  };

  // Create Employee
export const createController = async (req: Request, res: Response): Promise<void> => {
  try {
    const created = await create(req.body);
    console.log("Employee Created Successfully:", created);
    res.status(200).json(created);
  } catch (error) {
    console.error("Error creating Employee:", error);
    res.status(500).json({ message: "Failed to create Employee" });
  }
  };

  // Get Employee by ID
export const editController = async (req: Request, res: Response): Promise<void> => {
  try {
    const edited = await edit(Number(req.params.id));
    if (!edited) {
      res.status(404).json({ message: "Employee not found" });
    } else {
      res.json(edited);
    }
  } catch (error) {
    console.error("Error fetching Employee by ID:", error);
    res.status(500).json({ message: "Failed to fetch Employee" });
  }
};

// Update Employee
export const updateController = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await update(Number(req.params.id),req.body);
    console.log("Employee Updated Successfully:", updated);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating Employee", error);
    res.status(500).json({ message: "Failed to Updated Employee" });
  }
  
};

// Delete Employee
export const deleteController = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await destroy(Number(req.params.id));
    if (deleted) {
      res.status(204).json({ message: "delete Employee successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    console.error("Error deleting Employee:", error);
    res.status(500).json({ message: "Failed to delete Employee" });
  }
};
  