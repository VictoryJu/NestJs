import * as express from 'express';
import catsRouter from './cats/cats.route';

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
app.use(catsRouter);

//* 404 middleware
app.use((req,res,next)=>{
  console.log("this is Error Mid");
  res.send({error: "404 not found error"});
});

app.listen(port, () => {
  console.log(`server is on ${port}`)
})