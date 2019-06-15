import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
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
  group:{
    type: String
  },
  password:{
    type: password
  }

});