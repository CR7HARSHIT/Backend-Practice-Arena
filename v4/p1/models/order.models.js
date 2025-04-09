import mongoose from "mongoose"
const orderedItemSchema = new mongoose.Schema({
   productId:{
	type:mongoose.Schema.Types.ObjectId,
	ref:"Product"
   }
	,quantity:{
		type:Number,
		deafult:1
	}
})

const orderSchema=new mongoose.Schema({
  customer:{
	type:mongoose.Schema.Types.ObjectId,
	ref:"User",
	required:true
  },
  price:{
	type:Number,
	required:true
  },
  itemsOrdered:{
	type:[orderedItemSchema]
  }
},{timestamps:true})