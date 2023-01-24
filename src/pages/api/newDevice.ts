// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { Client } from "pg";
const client = new Client();

client.connect();

type Data = Device;
type Response = { success: boolean };

function createOwnership(owner_id: number, device_id: number) {
    const sql = `
        INSERT INTO ownerships (owner_id,
            device_id)
        VALUES ($1, $2)
        RETURNING id;
    `;
    return client
        .query(sql, [owner_id, device_id])
        .then((result) => result.rows[0])
        .catch((error) => console.log("error creating ownership", error));
}

function createDevice(
    device_name: string,
    device_type: string,
    available_space: number,
    battery_status: number,
    owned: boolean
) {
    const sql = `
        INSERT INTO devices (
            device_name,
            device_type,
            available_space,
            battery_status,
            owned)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
    `;
    return client
        .query(sql, [
            device_name,
            device_type,
            available_space,
            battery_status,
            owned,
        ])
        .then((result) => result.rows[0].id)
        .catch((error) => console.log("error inserting device", error));
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    if ((req.method = "POST")) {
        const data = req.body;
        const {
            device_name,
            device_type,
            available_space,
            battery_status,
            owned,
            owner_id,
        } = data;

        createDevice(
            device_name,
            device_type,
            available_space,
            battery_status,
            owned
        ).then((id) => {
            if (owned) {
                createOwnership(owner_id, id).then(() => {
                    res.status(200).json({ success: true });
                });
            } else {
                res.status(200).json({ success: true });
            }
        });
    }
}
