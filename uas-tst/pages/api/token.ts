import { getTokenByEmail } from "@/app/firebase/token";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "GET") {
            const { email } = req.query;
    
            if (!email || typeof email !== "string") {
            return res.status(400).json({ error: "Email is required and must be a string" });
            }

            const token = await getTokenByEmail(email);
            return res.status(200).json({ token: token });
        }
        else {
            res.setHeader("Allow", ["GET"]);
            return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}