import { Router } from 'express';
import { createController, deleteController, getController, editController, updateController } from '../../../controllers/billsoftadmin/franchise/franchise-controller';

const router = Router();

router.get('/franchise/get/:roll', getController);
router.post("/franchise/create", createController);
router.get("/franchise/edit/:id", editController);
router.put("/franchise/update/:id", updateController);
router.delete("/franchise/delete/:id", deleteController);

export default router;