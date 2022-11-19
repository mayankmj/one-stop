import mongoose from 'mongoose'

// to connect with db we use moogose we can also use mongodb library for that

const Connection = async(username,password) =>{ // async function returns a promise so we use await in front of them
    const URL=`mongodb://${username}:${password}@ac-2tdd3qn-shard-00-00.ghp7ovw.mongodb.net:27017,ac-2tdd3qn-shard-00-01.ghp7ovw.mongodb.net:27017,ac-2tdd3qn-shard-00-02.ghp7ovw.mongodb.net:27017/?ssl=true&replicaSet=atlas-74l7yz-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL , {useNewUrlParser: true});
       console.log('database connect successfully');
    } catch (error) {
        console.log('error while connecting with database',error);
    }
}

export default Connection;

// dotenv is not push on git it stores info we hide from publicfd