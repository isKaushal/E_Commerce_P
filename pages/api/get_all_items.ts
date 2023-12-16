import Items from "@/models/items.tsx";
import dbConnect from "@/config/dbconnect.tsx";
import { NextApiRequest, NextApiResponse } from "next";

type RespData = {
  _id?: any;
  msg?: string;
};

export default async function GetAllItems(
  req: NextApiRequest,
  res: NextApiResponse<RespData>
) {
  if (req.method === "GET") {
    dbConnect();

    const GetAllUsers: { _id: any } = await Items.find({}).lean();

    return res.status(201).json(GetAllUsers);
  }
  return res.status(500).json({ msg: "We Can't Get Any Data Yet" });
}
