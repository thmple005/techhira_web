import connectMongoDB from "../../libs/mongodb";
import User from "../../models/user-model";
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { userName, password, email } = await req.body;

    try {
      await connectMongoDB();

      const findUser = await User.find({ userName: userName });
      console.log("find", findUser);

      if (findUser.length>0) {
        return res
          .status(404)
          .json({ data: {}, message: "User already exist", status: 0 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ userName, password: hashedPassword, email });

      const createUser = await user.save();

      return res
        .status(200)
        .json({ data: createUser, message: "Success", status: 1 });
    } catch (error) {
      console.log("error", error);
      return res
        .status(400)
        .json({ error: "Something went wrong", error: error, status: 0 });
    }
  }
}
