import mongoose from 'mongoose';
const  patientSchema =new mongoose.Schema.Types.ObjectId({
 name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    }
    ,contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    medicalHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord'
    }]
    ,doctorAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }
    ,hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }
    ,emergencyContact: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        relationship: {
            type: String,
            required: true,
            trim: true
        },
        contactNumber: {
            type: String,
            required: true,
            trim: true
        }
    }
    ,allergies: [{
        type: String,
        trim: true
    }]
    ,currentMedications: [{
        name: {
            type: String,
            required: true,
            trim: true
        },
        diagnosedWith: {
            type: String,
            required: true,
            trim: true
        },
        frequency: {
            type: String,
            required: true,
            trim: true
        }
    }]
    ,bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    }
    ,insuranceDetails: {
        provider: {
            type: String,
            required: true,
            trim: true
        },
        policyNumber: {
            type: String,
            required: true,
            trim: true
        },
        coverageDetails: {
            type: String,
            required: true,
            trim: true
        }
    }

},{timestamps: true});


export const Patient  = mongoose.model('Patient', patientSchema );
