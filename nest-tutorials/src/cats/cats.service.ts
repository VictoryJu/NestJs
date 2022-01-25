import{Request,Response} from "express"
import { Cat, CatType} from './cats.model';

//* READ 고양이 전체 데이터 다 조회
export const readAllcat = (req: Request,res: Response)=>{
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
};

//* READ 특정 고양이 데이터 조회
export const readCat = (req:Request,res:Response)=>{
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
};

//* CREATE 새로운 고양이 추가
export const createCat = (req:Request,res:Response)=>{
  try{
    const data = req.body;
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: {data}
    })
  }catch(e){
    res.status(400).send({
      success:false
    })
  }
};

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req:Request,res:Response)=>{
  try{
    const id = req.params.id;
    const data = req.body;
    let result;
    Cat.forEach(item=>{
      if(item.id === id){
        item = data;
        result = item;
      }
    });
    res.status(200).send({
      success: true,
      data:{
        cat:result
      }
    })
  }catch(e:any){
    res.send({
      success: false,
      error: e.error.message
    })
  }
};
//* UPDATE 고양이 데이터 부분적 업데이트 -> PATCH
export const patchCat = (req:Request,res:Response)=>{
  try{
    const id = req.params.id;
    const data = req.body;
    let result;
    Cat.forEach(item=>{
      if(item.id === id){
        item = {...item,...data}; //기존 키에서 중복된 키의 벨류값을 바꿔준다
        result = item;
      }
    });
    res.status(200).send({
      success: true,
      data:{
        cat:result
      }
    })
  }catch(e:any){
    res.send({
      success: false,
      error: e.error.message
    })
  }
};
//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req:Request,res:Response)=>{
  try{
    const id = req.params.id;
    const newCat = Cat.filter(cat=>{
      return cat.id !== id
    })
    res.status(200).send({
      success: true,
      data: newCat
    })
  }catch(e:any){
    res.send({
      success: false,
      error: e.error.message
    })
  }
};