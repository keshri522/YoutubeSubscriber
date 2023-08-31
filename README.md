# YoutubeSubscriber

- Backend Project From Almabetter
- Just a Basic Backend Tutotrial where I Fetch all the Details


- To open the App please Click to the Link.
https://rahulyoutubesubscribers.onrender.com/


## Features
- Adding three Api for getting all the Subscribers
- 1 By getting Subscribers
- 2 By getting by their Names
- 3 By Getting by their Id


## What I used.
- Node.js
- Express.js
- Mongoose
- dotenv
- Api
- nodemon

## About Project

✅which has mainly  3 routes

- First endpoint is just for Getting all the Subscribers.
- Second endpoint is just for Getting all the  Subscribers by their name.
- Third endpoint is just for Getting all the  Subscribers by their Ids.
- Also Added some Validation Whether Subscribers exits or not.


- Add /subscribers in URL : Provides an array of all subscribers in the database.
- Add /subscribers/names in URL : Provides an array of subscribers with only two fields name and subscribedChannel
- Add /subscribers/:id in URL: Provides the details of a subscriber with the given ID.


## Apis
- These are the end points of the api
- app.get("/",async(req,res)=>{ 
    try {
        res.sendFile(__dirname + "/Src/index.html") //defining the route folder of the index .html and here wherever we deployed this this path will help to locate the index.html file

    } catch (error) {
        res.status(400).send(error.message)
    }
}) 
// creating subscribers routes for getting all the subscribers
- app.get("/subscribers",async(req,res)=>{
    try {
        const subscribers=await SubscriberModal.find({}).select("-__v")//here i am finding all the subscribed but i want to show the info of all subscriber except the __v (version so i use -v to exclude this)
        //  console.log(subscribers)
         res.status(200).json(subscribers) //here sending the response 
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// the second routes is getting all the data by the name..
- app.get("/subscribers/names", async (req, res) => {
    try {
        
    

    } catch (error) { //if there is any errror occuurs then it will show the error i use try and catch method to handle this 
        res.status(400).send(error.message)
    }
  
  });
//the last and the third api is for getting all the subscriber by the their id

- app.get("/subscribers/:id",async(req,res)=>{
    const Id= req.params.id // coming from clent cide using body parsor to to what is coming in the request in the headers
    try {
      
   
    } catch (error) { //if there is any error in the api then it will show the error in catch block orif clent enter the the in the not proper fromat then ctch block will executed
    //    res.status(400).send({message:`Subscriber does not exits with the given ${Id}`}) 
    res.status(400).sendFile(__dirname + "/Src/error.html")
    }
   

})
- app.use((req, res, next) => { //this is for when user enter the wrong routes the error i shown it is middleware which will act jut before the server send the response to clent that why i add this to last if i add to srtart then it will basically hold other api to executes
    res.status(404).send({ message: "Route not found. Please check your route." });
  });


## 🚀 About Me
I'm a full stack developer...
- Write a mail on :rkeshri522@gmail.com


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://in/rahul-keshri-814bb8221/)


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

