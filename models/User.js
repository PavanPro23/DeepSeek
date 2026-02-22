<<<<<<< HEAD
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        _id: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        image: {type: String, required: false}
    },
    {timestamps: true}
)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

=======
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        _id: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        image: {type: String, required: false}
    },
    {timestamps: true}
)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

>>>>>>> 51cb7ee5885c7274b002008fe5438767c3e0650e
export default User;