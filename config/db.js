<<<<<<< HEAD
import mongoose from "mongoose";

let cached = global.mongoose || {conn: null, promise: null}

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(process.env.MONGODB_URI).then((mongoose) => mongoose);
    }
    try {
        cached.conn = await cached.promise
    } catch (error) {
        console.error('Error connecting to DB: ', error);
    }

    return cached.conn;
=======
import mongoose from "mongoose";

let cached = global.mongoose || {conn: null, promise: null}

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(process.env.MONGODB_URI).then((mongoose) => mongoose);
    }
    try {
        cached.conn = await cached.promise
    } catch (error) {
        console.error('Error connecting to DB: ', error);
    }

    return cached.conn;
>>>>>>> 51cb7ee5885c7274b002008fe5438767c3e0650e
}