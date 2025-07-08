import mongoose from 'mongoose';
const  medicalRecordSchema =new mongoose.Schema.Types.ObjectId({


},{timestamps: true});


export const MedicalRecord  = mongoose.model('MedicalRecord', medicalRecordSchema);
