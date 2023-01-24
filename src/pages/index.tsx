import Link from "next/link";
import DeviceCard from "@/components/DeviceCard";
import type { Device } from "@/types";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

let listOfDevices: Device[] = [
    {
        id: 5,
        device_name: "device A",
        device_type: "Laptop",
        available_space: 32,
        owned: true,
        battery: 100,
        owner_name: "Bob",
        owner_id: 1,
    },
    {
        id: 2,
        device_name: "device B",
        device_type: "Tablet",
        available_space: 876,
        owned: false,
        battery: 55,
        owner_name: null,
        owner_id: null,
    },
];

function HomePage() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {listOfDevices.map((deviceObj) => {
                        return (
                            <Grid item xs={4} key={deviceObj.id}>
                                <Item>
                                    <DeviceCard device={deviceObj}></DeviceCard>
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}

export default HomePage;
