const mongoose = require('mongoose'); 

const susbcriberSchema = new mongoose.Schema({ //creating the modal or the blueprint of the documents ...
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber',susbcriberSchema); //exporting the modal so we can easily import this modal any where in the app
// here Subscriber is the name of the collection that is created by monggose in which all the subscribrShcema is stored ..