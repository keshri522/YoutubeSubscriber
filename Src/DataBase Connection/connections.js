
const mongoose=require("mongoose") //importing the mongoose third party library  to connect the databse..
const data=require("../data") //importing the data or list of subscribers ///
const SubscriberModal=require("../Modal/subscriber") //importing the our Subscriber modal ...
const dotenv=require("dotenv") //import dotenv file for the envirornment variables
dotenv.config()
// Connecting the databse //
//using async function to create a connetion
const Connection=async()=>{ //i am creating a connection bewteeen databse using async await you can aslo use then and catch method
    
    try {
        const DataBaseUri= "mongodb+srv://rkeshri522:Rahulkeshri123@cluster0.pmobmox.mongodb.net/?retryWrites=true&w=majority"
       const Connect=  await mongoose.connect(DataBaseUri,{   UseNewUrlParser: true,
        useUnifiedTopology: true})
        // note//
        // UseNewUrlParser:ture  //When this option is enabled, it tells the MongoDB driver to use the new URL parser when connecting to the MongoDB server.
        // useUnifiedTopology: true, when we use this we  are instructing the MongoDB driver to use the unified topology engine for managing connections to the MongoDB server. 
        console.log("DataBase Connected SucessFully")
        return mongoose;
    } catch (error) {
        console.log(error) //if there is any error will come then it will show in the console..
    }
}

//creating a function here to insert the my data into the databse....
const refreshAll = async () => {
    try {
       // await SubscriberModal.deleteMany({}) //first it will deelte all the data 
    // console.log(connection)
    await SubscriberModal.insertMany(data) //then insert all the data 
    // await mongoose.disconnect(); 
    } catch (error) {
        console.log(error)
    }
    
}


module.exports={Connection,refreshAll} //exporting here two function and importing in the server.js so i can call them there