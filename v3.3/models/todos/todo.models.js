import mongoose from "mongoose"
const todoSchema=new mongoose.Schema({
	heading:{
		type:String,
		required:true
	},
	subtodos:[{
	   type:mongoose.Schema.Types.ObjectId,
	   ref:"Subtodo"	
	}],
	createdBy:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User"
	}
},{timestamps:true})
export const Todo=mongoose.model("Todo",todoSchema)