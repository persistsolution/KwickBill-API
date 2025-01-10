import { Router } from 'express';
import { createController, deleteController, getController, editController, updateController } from '../../../controllers/billsoftadmin/employee/employee-controller';

const router = Router();

router.get('/employee/get/:roll', getController);
router.post("/employee/create", createController);
router.get("/employee/edit/:id", editController);
router.put("/employee/update/:id", updateController);
router.delete("/employee/delete/:id", deleteController);

export default router;