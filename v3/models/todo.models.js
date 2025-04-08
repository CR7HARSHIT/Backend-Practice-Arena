import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
	heading:{
		type:String,
		required:true
	},
	complete:{
      type:Boolean,
	  default:false 
	},
	createdBy:{
       type:mongoose.Schema.Types.ObjectId,
	   ref:"User"
	},
	subtodos:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Subtodo"
	}],
})
export const Todo=mongoose.model("Todo",todoSchema)
