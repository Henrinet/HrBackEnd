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
  

  .post((req,res) =>
  res.send('post request succesfully!'));

  app.route('/contact/:contactID')
  .put((req,res) =>
  res.send('put request succesfully!'))
  
  .delete((req,res) =>
  res.send('delete request succesfully!'));
  
}

export default routes;