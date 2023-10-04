import mongoose from "mongoose";


const connectDB = async () => {
    // Use new db connection

    try{

        await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
        // console.log("DB Connected Successfully")
    } catch (error){
        console.log(`Errror in db: ${error}`);
    }

  };
  
export default connectDB;
