import DeviceCard from "./DeviceCard";
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

type Props = { devices: Device[] };

export default function DeviceCardList({ devices }: Props) {
    console.log(devices);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {devices.map((device) => {
                    return (
                        <Grid item xs={4} key={device.id}>
                            <Item>
                                <DeviceCard></DeviceCard>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
