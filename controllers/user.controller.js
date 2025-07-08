import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // Logic for user registration
    res.status(200).json({ message: 'User registered successfully' });
});

export { registerUser };
