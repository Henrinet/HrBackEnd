import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const hrSchema = new Schema({
  employeeID:{
    type: String, required: true, index: { unique: true }
  },
  securityLevel:{
    type: Number
  },
  GroupID:{
    type: String
  },
  firstName:{
    type: String,
    required: 'Enter first name'
  },
  lastName:{
    type: String,
    required: 'Enter last name'
  },
  fullName:{
    type: String
  },
  email:{
    type: String
  },
  phone:{
    type: Number
  },
  title:{
    type: String
  },
  department:{
    type: String
  },
  salary:{
    type: Number
  },
  password:{
    type: String, required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});