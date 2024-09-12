// import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectMongoDB from "../../../libs/mongodb";
import UserContactUs from "../../../models/contact-us-model";

export const getTokenFrom = (request) => {
  try {
    const authorization = request.headers["authorization"];

    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
      return authorization.split(" ")[1];
    }
    return null;
  } catch (err) {
    return null;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongoDB();
      const usercontactus = new UserContactUs(req.body);
      const createRoom = await usercontactus.save();
      return res
        .status(200)
        .json({ data: createRoom, message: "Success", status: 201 });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Something went wrong", error: error, status: 400 });
    }
  }

  if (req.method === "GET") {
    const token = getTokenFrom(req);

    if (!token) {
      return res.status(401).json({ error: "token missing or invalid token" });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.userId) {
      return res.status(401).json({ error: "token missing or invalid token" });
    }

    try {
      await connectMongoDB();
      const contact = await UserContactUs.find();
      return res
        .status(200)
        .json({ data: contact, message: "Success", status: 1 });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Something went wrong", error: error, status: 400 });
    }
  }
}
