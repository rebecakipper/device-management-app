// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Client } from "pg";
const client = new Client();

client.connect();

client.query("SELECT * FROM owners;", (err, res) => {
    console.log(err ? err.stack : res.rows);
    client.end();
});

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: "John Doe" });
}
