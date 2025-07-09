import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
 

 const uploadOnCloudinary = async (localFilePath) => {
     try{
        if(!localFilePath) return null;
        // upload file to cloudinary
       const response = await cloudinary.uploader.upload(localFilePath, {
           resource_type: "auto",
       });
        // file has been successfully uploaded
        console.log("File uploaded successfully to Cloudinary",
            response.url
        );
        return response;


     }
        catch(error) {
            fs.unlinkSync(localFilePath); // delete the local file
            // log the error       
            return null;
            // throw new Error("Failed to upload file to Cloudinary");
                                                                             

            console.error("Error uploading to Cloudinary:", error);
            throw new Error("Failed to upload file to Cloudinary");
        }
 }

 export { uploadOnCloudinary };

/*
cloudinary.v2.uploader
.upload("sample.jpg",
  { width: 2000, height: 1000, crop: "limit" })
.then(result=>console.log(result));
*/
