import dbConnect from "@/config/dbconnect.tsx";
import Users from "@/models/users.tsx";
import { NextApiRequest, NextApiResponse } from "next";

type ApiData = {
  _id?: any;
  msg?: String;
  firstname?: string;
  lastname?: string;
  email?: string;
  passsword?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData>
) {
  if (req.method === "GET") {
    dbConnect();

    const GetAllUsers: { _id: any } = await Users.find({}).lean();
    return res.status(200).json(GetAllUsers);
  }
  return res.status(200).json({ msg: "We Can't Get Any Users At the Moment" });
}
