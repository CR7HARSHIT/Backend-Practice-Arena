import mongoose from "mongoose"
const productSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true,
	},
	description:{
		type:String,
		required:true
	},
	category:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"category",
		required:true
	},
   price:{
	type:Number,
	default:0
   },
   stock:{
	type:Number,
	default:0
   }
},{timestamps:true})