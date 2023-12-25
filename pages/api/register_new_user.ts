import bcrypt from "bcrypt";
import dbConnect from "@/config/dbconnect.tsx";
import User from "@/models/users.tsx";
import { NextApiRequest, NextApiResponse } from "next";

export default async function RegisterNewUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    dbConnect();

    const HandleCheck = await User.findOne({
      email: req.body.email,
    });

    if (HandleCheck === null) {
      let { password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const Database = await User.create({ ...req.body, password: hashPass });
      return res.status(201).json(Database);
    }

    return res.status(500).json({ msg: "Please Try Another Email" });
  }
  return res.status(500).json({ msg: "There Is An Error" });
}
