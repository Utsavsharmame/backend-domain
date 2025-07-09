import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // Logic for user registration

  //res.status(200).json({ message: 'User registered successfully' });
  // get the user details from the frontend
  //  user validation
  const { fullname, email, username, password } = req.body;
  console.log(" email: ", email);

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError("All fields are required", 400);
  }
  const existedUser = User.findOne({
    $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }],
  });
  // check if the user already exists

  if (existedUser) {
    throw new ApiError("User already exists", 409);
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;

  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError("Avatar is required", 400);
  }


 const avatar = await uploadOnCloudinary(avatarLocalPath);
 const coverImage = await uploadOnCloudinary(coverImageLocalPath);


 if(!avatar){
    throw new ApiError("Failed to upload avatar", 500);
 }

  const user = await User.create({
    fullname,
    avatar: avatar?.url,
    coverImage: coverImage?.url || "",
    email: email.toLowerCase(),
    username: username.toLowerCase(),
    password,

 })
 const  createdUser = await User.findById(user._id).select(
    "-password -refreshToken");


     if(!createdUser) {
       throw new ApiError("Failed to create user", 500);
     }

     return res.status(201).json(
       new ApiResponse(200, "User registered successfully", createdUser)
     );


});

export { registerUser };
