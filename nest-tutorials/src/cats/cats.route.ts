import { Cat, CatType} from './cats.model';
import { Router} from 'express';

const router = Router();

//* READ 고양이 전체 데이터 다 조회
router.get('/cats',(req,res)=>{
  try{
    const cats = Cat;
    res.status(200).send({
      success: true,
      data:{
        cats,
      },
    });
  }catch(error:any){
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터 조회
router.get('/cats/:id',(req,res)=>{
  try{
    const id = req.params.id
    const cat = Cat.find((cat)=>{
      return cat.id === id
    });
    res.status(200).send({
      success: true,
      data:{
        cat,
      },
    });
  }catch(error:any){
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가
router.post('/cat',(req,res)=>{
  try{
    const data = req.body;
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: {data}
    })
  }catch(e){

  }
})

export default router;