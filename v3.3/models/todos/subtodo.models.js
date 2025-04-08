import mongoose from "mongoose"
const subtodoSchema=new mongoose.Schema({
	content:{
		type:String,
		required:true
	},
	complete:{
		type:Boolean,
		default:false
	},
	belong_todo:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Todo"
	}
},{timestamps:true})

export const Subtodo=mongoose.model("Subtodo",subtodoSchema)