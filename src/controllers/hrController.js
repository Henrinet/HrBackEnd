import mongoose from 'mongoose';
import { hrSchema } from '../models/hrModel';

const Hr = mongoose.model('Hr', hrSchema);

export const addNewHr = (req, res)=>{
  let newHr = new Hr (req.body);
  newHr.save((err, hr) =>{
    if(err){
      res.send(err);
    }
    res.json(hr);
  });

};