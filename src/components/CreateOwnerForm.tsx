import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// this should be a shared type between FE and BE, FIX ME!
type Device = {
    id: number;
    device_name: string;
    device_type: string;
    available_space: number;
    battery_status: number;
    owned: boolean;
};

//to be fetched from db
let availableDevices = [
    {
        id: 6,
        device_name: "tester",
        device_type: "Laptop",
        available_space: 43,
        battery_status: 100,
        owned: false,
    },
    {
        id: 7,
        device_name: "tester2",
        device_type: "Laptop",
        available_space: 43,
        battery_status: 100,
        owned: false,
    },
    {
        id: 8,
        device_name: "tester3",
        device_type: "Laptop",
        available_space: 43,
        battery_status: 100,
        owned: false,
    },
];

export default function CreateOwnerForm() {
    const [selectedDevicesName, setSelectedDevicesName] = React.useState<
        Device["device_name"][]
    >([]);

    const mapNamesToDevices = (listOfNames: typeof selectedDevicesName) => {
        return availableDevices.reduce<Device[]>((acc, device) => {
            if (listOfNames.includes(device.device_name)) {
                acc.push(device);
            }
            return acc;
        }, []);
    };

    const handleChange = (
        event: SelectChangeEvent<typeof selectedDevicesName>
    ) => {
        const {
            target: { value },
        } = event;

        console.log(value);

        setSelectedDevicesName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
        //
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 2, width: "40ch" },
                }}
            >
                <TextField required id="owner_name" label="Name" />
                {/* <TextField
                    id="outlined-select-currency"
                    select
                    label="Devices"
                    helperText="Please select the devices you wish assign to this owner"
                >
                    {availableDevices.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.device_name}
                        </MenuItem>
                    ))}
                </TextField> */}

                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">
                            Devices
                        </InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedDevicesName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Devices" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                        >
                            {availableDevices.map(({ id, device_name }) => (
                                <MenuItem key={id} value={device_name}>
                                    <Checkbox
                                        checked={
                                            selectedDevicesName.indexOf(
                                                device_name
                                            ) > -1
                                        }
                                    />
                                    <ListItemText primary={device_name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <Button
                    variant="contained"
                    onClick={() => {
                        const result = mapNamesToDevices(selectedDevicesName);
                        console.log(result);
                    }}
                >
                    Create
                </Button>
            </Box>
        </>
    );
}
