import express from 'express';
import routes from './src/routes/hrRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hrBackEnd',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
  res.send("HrBackEnd is running")
);

app.listen(PORT, ()=>
  console.log(`Your Server is on port ${PORT}`)
);