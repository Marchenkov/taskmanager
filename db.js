import mongoose from 'mongoose';

const URI = 'mongodb+srv://marchenkov:yjN1fFtmXHvMTqDg@cluster0.e19hvvr.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.error(e)
});