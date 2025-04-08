import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
	username:{
		type:String,
		unique:true,
		required:true,
		min:[6,`Atleast 6 char should be present `],
		lowercase:true
	},
	email:{
		type:String,
		unique:true,
		required:true,
		lowercase:true
	},
	password:{
		type:String,
		required:true
	}
},{timestamps:true})

export const User=mongoose.model("User",userSchema)