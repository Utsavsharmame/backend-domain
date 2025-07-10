// import mongoose from "mongoose";

// import { Schema } from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";


// const userSchema = new  Schema({
//     username:{
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//         lowercase: true,
//         index: true,

//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         match: /.+\@.+\..+/
//     },
//     password: {
//         type: String,
//         required: [true, 'Password is required'],
//         minlength: 6
//     },
//     fullname:{
//         type: String,
//         required: [true, 'Full name is required'],
//         trim: true,
//         index: true,
//     },
//     avatar: {
//         type: String,
//       required: false,
//     },
//     coverImage: {
//         type: String,
//         required: false,                                                                                            

//     },
//     watchHistory: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Video'
//     }],
//   refreshToken: {
//   type: String,
//   required: [true, 'Refresh token is required']
//   },

// }, {timestamps: true}



// );
// userSchema.pre('save', async function(next) {

//     if (!this.isModified('password')) return next();
//     // Hash the password before saving it to the database
//     this.password = await bcrypt.hash(this.password, 10);
//     next();

// })
// userSchema.methods.isPasswordCorrect = async function(password) {
//     return await  bcrypt.compare(password, this.password)
//     };
//   // token generate

//     userSchema.methods.generateAccessToken = function() {
//     return jwt.sign({
//          id: this._id,
//             username: this.username,
//             email: this.email,
//             fullname: this.fullname,

//          },
//           process.env.ACCESS_TOKEN_SECRET,
//            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
// }

// userSchema.methods.generateRefreshToken = function() {
//     return jwt.sign({
//          _id: this._id,
//          }, 
//          process.env.REFRESH_TOKEN_SECRET, 
//          { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
// }

// export const User = mongoose.model("User", userSchema);


import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)