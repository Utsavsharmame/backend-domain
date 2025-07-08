import { request } from "express"

//m1
const asyncHandler = (requestHandler) => {
    return (req,res, next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((error) => next(error))
    }

}
 export { asyncHandler}


    //m2
// //}
//  export { asyncHandler}

//  const asyncHandler = (fn) => async(req,res,next) => {
//    try {
//        await fn(req, res, next);
//    } catch (error) {
//        res.status(er.code || 500).json({
//            message: error.message || 'Internal Server Error',   
//            success: false
//          });
//    }
//  }