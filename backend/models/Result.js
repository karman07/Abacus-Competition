const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResultSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    correct:{
        type:Number,
        required: true,
    },
    wrong:{
        type:Number,
        required: true,
    },
    left:{
        type:Number,
        required: true,
    }
  });
  
  const opts = {
    bufferCommands: false,
}

const Result = mongoose.model('result', ResultSchema)
Result.createIndexes()
module.exports = Result