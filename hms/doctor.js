import mongoose from 'mongoose';
const  doctorSchema =new mongoose.Schema.Types.ObjectId({
   
    doctor:{
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    experienceInYears: {
        type: Number,
        required: true,
        min: 0
    },
    worksInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],

    
},{timestamps: true});


export const Doctor  = mongoose.model('Doctor', doctorSchema);
