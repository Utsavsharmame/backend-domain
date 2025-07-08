import express from "express";
 const  app = express();

 app.get("/" ,(req, res) => {
    res.send("Hello, my World!");

 });

 app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke about programming",
            punchline: "Why do programmers prefer dark mode? Because light attracts bugs!"

        },
        {
            id: 2,
            title: "A joke about arrays",
            punchline: "Why did the array go to therapy? Because it had too many elements!"

        },
        {
            id: 3,
            title: "A joke about functions",
            punchline: "Why do functions always break up? Because they have too many arguments!"
        },
        {
            id: 4,
            title: "A joke about objects",
            punchline: "Why did the object go to therapy? Because it couldn't stop comparing itself to others!"
        },{
            id: 5,
            title: "A joke about loops",
            punchline: "Why did the loop break up? Because it couldn't find a way to exit!"
        }
    ];
    res.json(jokes);
});


const PORT  = process.env.PORT || 3000;


import connectDB from "./db/index.js";
import userRouter from "./routes/user.routes.js";

connectDB();
app.use("/api/v1/users", userRouter);
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});