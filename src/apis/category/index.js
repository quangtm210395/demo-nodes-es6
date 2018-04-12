import {Router} from 'express';
import CategoryController from './category.controller';
let router = Router();

// routing request có method GET /api/category/all tới function getAll ở controller
router.get('/all', CategoryController.getAll);

// routing request có method POST /api/category/ tới function add ở controller
router.post('/', CategoryController.add);

export default router;