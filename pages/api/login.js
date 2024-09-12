import connectMongoDB from "../../libs/mongodb";
import User from "../../models/user-model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { userName, userPassword } = await req.body;
    try {
      await connectMongoDB();
      const findUser = await User.find({ userName: userName });

      if (findUser.length === 0) {
        return res
          .status(404)
          .json({ data: {}, message: "Not found", status: 0 });
      }
      
      const { id,password } = findUser[0];

      const isPassword = await bcrypt.compare(userPassword, password);

      if (isPassword) {
        const tokenSign = {
          userId: id,
        };

        const user_access_token = jwt.sign(
          { ...tokenSign, type: "access_token" },
          process.env.SECRET,
          {
            expiresIn: 84000,
          }
        );
        return res
          .status(200)
          .json({ data: user_access_token, message: "Success", status: 1 });
      } else {
        return res
          .status(401)
          .json({ data: "", error: "Invalid auth", status: 0 });
      }

    } catch (error) {
        console.log('error',error);
      return res
        .status(400)
        .json({ error: "Something went wrong", error: error, status: 400 });
    }
  }
}
