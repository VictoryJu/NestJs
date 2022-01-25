import { Router} from 'express';
import { createCat, deleteCat, patchCat, readAllcat, readCat, updateCat } from './cats.service';

const router = Router();

router.get('/cats',readAllcat);
router.get('/cats/:id',readCat);
router.post('/cat',createCat)
router.put('/cat/:id',updateCat)
router.put('/cat/:id',patchCat)
router.delete('/cat/:id',deleteCat)

export default router;