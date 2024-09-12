import jwt from "jsonwebtoken";
import connectMongoDB from "../../../libs/mongodb";
import UserContactUs from '../../../models/contact-us-model'
import { getTokenFrom } from "./route";

export default async function handler(req,res) {
    if (req.method === 'GET') {
      const token = getTokenFrom(req);

      if (!token) {
        return res.status(401).json({ error: "token missing or invalid token" });
      }
  
      const decodedToken = jwt.verify(token, process.env.SECRET);
  
      if (!decodedToken.userId) {
        return res.status(401).json({ error: "token missing or invalid token" });
      }

      const {
        query: { id },
      } = req;

      try {
        await connectMongoDB();
        const contact = await UserContactUs.find({_id:id})
        return res.status(200).json({ data:contact,message: "Success" ,status: 1});
  
      } catch (error) {
        return res.status(400).json({ error: "Something went wrong" ,error:error,status: 400});
      }
    }
}