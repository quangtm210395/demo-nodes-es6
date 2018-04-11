import {Router} from 'express';
import CategoryController from './category.controller';
let router = Router();

router.get('/all', CategoryController.getAll);
router.post('/', CategoryController.add);

export default router;