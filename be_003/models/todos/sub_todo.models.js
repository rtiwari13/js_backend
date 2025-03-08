import mongoose from "mongoose";

const subTodoSchehma = new mongoose.Schema(
    { 

        content:{
            type:String,
            required:true,
        },
        complete:{
            type:Boolean,
        }
    },
    {timestamps:true}
)

export const SubTodo = mongoose.model("SubTodo",subTodoSchehma)