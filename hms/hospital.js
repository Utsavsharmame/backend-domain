import mongoose from 'mongoose';
const  hospitalSchema =new mongoose.Schema.Types.ObjectId({
 name: {
    type: String,
    required: true,
    trim: true

 },
    location: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    pincode: {
        type: String,
        required: true,
        trim: true,
        match: /^[0-9]{6}$/
    },
    specializedIn: {
        type: String,
        required: true,
        trim: true                                                                                                                                                                                                                                                  
    } 
    ,doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],                                          
    
},{timestamps: true});


export const Hospital = mongoose.model("Hospital", hospitalSchema);
