import { addNewHr } from "../controllers/hrController";

const routes = (app) => {
  app.route('/contact')
  .get((req,res,next)=>{
    //middleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request from: ${req.method}`)
    next();
  },(req,res,next)=>{  
    res.send('get request succesfully!');
  })
  
  // POST Endpoint
  .post(addNewHr);

  app.route('/contact/:contactID')
  .put((req,res) =>
  res.send('put request succesfully!'))
  
  .delete((req,res) =>
  res.send('delete request succesfully!'));
  
}

export default routes;