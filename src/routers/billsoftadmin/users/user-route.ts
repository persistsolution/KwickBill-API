import { Router } from 'express';
import { createController, deleteController, getController, editController, updateController } from '../../../controllers/billsoftadmin/users/user-controller';

const router = Router();

router.get('/user/get', getController);
router.post("/user/create", createController);
router.get("/user/edit/:id", editController);
router.put("/user/update/:id", updateController);
router.delete("/user/delete/:id", deleteController);

export default router;