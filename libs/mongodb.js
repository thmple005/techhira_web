import mongoose,{Schema} from 'mongoose';

const connectMongoDB=async()=>{
    try{
     mongoose.connect(process.env.MONGODB_URI);
    }
    catch(error){  
     console.log('error',error);
    }
}

export default connectMongoDB