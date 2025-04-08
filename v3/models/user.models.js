import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
	username:{
		type:String,
		required:true,
		lowercase:true,
		unique:[true,"Username Already Exist"]
	},
	email:{
		type:String,
		lowercase:true,
		unique:[true,"Email Already Exist"],
		required:true
	},
	password:{
		type:String,
		required:true
	}
})
export const User=mongoose.model("User",userSchema)