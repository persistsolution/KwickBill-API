import { Router } from 'express';
import { createController, deleteController, getController, editController, updateController } from '../../../controllers/billsoftadmin/selling-product/category-controller';

const router = Router();

router.get('/selling-product/category/get', getController);
router.post("/selling-product/category/create", createController);
router.get("/selling-product/category/edit/:id", editController);
router.put("/selling-product/category/update/:id", updateController);
router.delete("/selling-product/category/delete/:id", deleteController);

export default router;

