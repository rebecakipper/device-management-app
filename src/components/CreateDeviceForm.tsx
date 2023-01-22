import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";

const deviceTypes = [
    {
        type: "Laptop",
    },
    {
        type: "Smartphone",
    },
    {
        type: "Tablet",
    },
    {
        type: "Camera",
    },
];
//to be fetched from db
const owners = [
    {
        name: "Bob",
        id: "Bob",
    },
    {
        name: "John",
        id: "John",
    },
    {
        name: "Mark",
        id: "Mark",
    },
    {
        name: "Joe",
        id: "5",
    },
    {
        name: "None",
        id: "",
    },
];

export default function CreateDeviceForm() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 2, width: "40ch" },
                }}
            >
                <TextField required id="device_name" label="Name" />
                <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="Type of device"
                    helperText="Please select your device type"
                >
                    {deviceTypes.map((option) => (
                        <MenuItem key={option.type} value={option.type}>
                            {option.type}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    required
                    label="Available space (in Mb)"
                    id="outlined-availabe-space"
                    defaultValue={0}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">Mb</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="outlined-select-owner"
                    select
                    label="Owner"
                    defaultValue="none"
                    helperText="Please assign an owner"
                >
                    {owners.map((option) => (
                        <MenuItem key={option.name} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained">Create</Button>
            </Box>
        </>
    );
}
