import * as express from 'express';
import { Cat, CatType} from './app.model';

const app:express.Express = express();

const port:number = 8000;

const data = [1,2,3,4];

//* logging middleware
app.use((req,res,next)=>{
  console.log(req.rawHeaders[1]);
  console.log("this is Mid");
  next();
});

//* json middleware
app.use(express.json());

//* CREATE 새로운 고양이 추가
app.post('/cat',(req,res)=>{
  try{
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {data}
    })
  }catch(e){

  }
})

//* READ 고양이 전체 데이터 다 조회
app.get('/cats',(req,res)=>{
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
app.get('/cats/:id',(req,res)=>{
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



//* 404 middleware
app.use((req,res,next)=>{
  console.log("this is Error Mid");
  res.send({error: "404 not found error"});
});

app.listen(port, () => {
  console.log(`server is on ${port}`)
})