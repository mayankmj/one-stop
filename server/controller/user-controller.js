   
   
import User from '../model/user.js';
// dotenv.config();

export const signupUser = async (request , response ) =>{ // resquest comes from frontend like api url api body api header
    console.log(request.body);
                try {
                    const user = request.body  //request =>object   body =>key

                    const newUser = new User(user); // verfication

                    await newUser.save();  // save the new user records into database

                    return response.status(200).json({msg : 'Signup successfull'});
                } catch (error) {
                    console.log(error);
                    return response.status(500).json({msg : '1error'});
                }                                     // response goes from backend to frontend according to the request
                                                     
} ;