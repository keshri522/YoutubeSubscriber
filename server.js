
const express =require("express") //here i am importing express thrid party modules..
const app=express() //here i am perfroming each and every action/routes with the name of app
const bodyParser = require("body-parser");
//this is body parser to parse all the data that is being send in requet or http body from frontend so we can access the body 
const dotenv=require("dotenv").config() //importing/requiring the dotenv enviorment files
app.use(bodyParser.urlencoded({extended:true})) //this is the middle ware to parse the body this will excecute first ..
app.use(express.json()) //this is also middleware 
  //defining a middleware when ever user enter by mistake any other end point then a errror messagwe will show
const {Connection,refreshAll}=require("./Src/DataBase Connection/connections") //here i am using destructing of connecction.js taking both the function from connection.js using object destructuring
const SubscriberModal =require("./Src/Modal/subscriber"); //requiring the collection that had created in modal 


// calling both the function here
Connection(); //here running the Connection function to connect the databse ..
refreshAll() //here running the refreshALl function to insert all the data inside the database these are coming from connection.js
app.use(express.static("public"))  //here defining the static files which is serverd by our app.js means if we want to access static files like css then we use app.use middleware static
//everything inside the our public folder will run first when ever ever our server connected because we are using the middlewareapp.use
//here defining my all the routes .



  

app.get("/",async(req,res)=>{ 
    try {
        res.sendFile(__dirname + "/Src/index.html") //defining the route folder of the index .html and here wherever we deployed this this path will help to locate the index.html file

    } catch (error) {
        res.status(400).send(error.message)
    }
})
// creating subscribers routes for getting all the subscribers
app.get("/subscribers",async(req,res)=>{
    try {
        const subscribers=await SubscriberModal.find({}).select("-__v")//here i am finding all the subscribed but i want to show the info of all subscriber except the __v (version so i use -v to exclude this)
        //  console.log(subscribers)
         res.status(200).json(subscribers) //here sending the response 
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// the second routes is getting all the data by the name..
app.get("/subscribers/names", async (req, res) => {
    try {
        
        const subscribers = await SubscriberModal
        .find({})
        .select("-_id -subscribedDate -__v");  //here also i exclude all the fileds i want to show only the so i use - one to exclude all the things in select statement it will show only the names 

      res.status(200).send(subscribers)
    } catch (error) { //if there is any errror occuurs then it will show the error i use try and catch method to handle this 
        res.status(400).send(error.message)
    }
  
  });
//the last and the third api is for getting all the subscriber by the their id

app.get("/subscribers/:id",async(req,res)=>{
    const Id= req.params.id // coming from clent cide using body parsor to to what is coming in the request in the headers
    try {
      
        const subscriberById=await SubscriberModal.find({_id:Id}).select("-__V");
        if(!subscriberById){ //here i am checking or adding condtion based on i if user enters wrong id then it will show the error message that not found
            res.status(400).send(`Sorry no any Subscribers exists with the given ${Id}`)

        }
        else{
            res.status(200).send(subscriberById) //if id is right then it will the details of the ubscribers based on the id entered by the client
        }
    } catch (error) { //if there is any error in the api then it will show the error in catch block orif clent enter the the in the not proper fromat then ctch block will executed
    //    res.status(400).send({message:`Subscriber does not exits with the given ${Id}`}) 
    res.status(400).sendFile(__dirname + "/Src/error.html")
    }
   

})
//this i the middle ware 
app.use((req,res,next)=>{ //adding middle at the last of all the routes so that it will not before any of the routes get block all the previous so i add at the last if users enter the wrong route then at the this middle ware will excetued and thrown an error 
    res.status(400).send({message:"Route not found please Check Your Route."})
})


const port=process.env.PORT || 3000 //if any of the port is available then it will created a connection 
// Starting the Server
app.listen(port,()=>console.log(`Server is running at the port ${port}`))
