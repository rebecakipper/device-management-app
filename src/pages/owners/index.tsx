import CreateInstanceModal from "@/components/CreateInstanceModal";
import OwnerCard from "@/components/OwnerCard";
import type { Owner } from "@/types";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//to be fetched from db
let listOfOwners: Owner[] = [
    {
        id: 5,
        owner_name: "Jack",
        has_devices: true,
        owned_devices_list: [
            {
                id: 5,
                device_name: "device A",
                device_type: "Laptop",
                available_space: 32,
                owned: true,
                battery: 100,
                owner_name: "Jack",
                owner_id: 5,
            },
            {
                id: 2,
                device_name: "device B",
                device_type: "Tablet",
                available_space: 876,
                owned: false,
                battery: 55,
                owner_name: "Jack",
                owner_id: 5,
            },
        ],
    },
    {
        id: 3,
        owner_name: "Bob",
        has_devices: false,
        owned_devices_list: null,
    },
];

function OwnersPage() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {listOfOwners.map((ownerObj) => {
                        return (
                            <Grid item xs={4} key={ownerObj.id}>
                                <Item>
                                    <OwnerCard owner={ownerObj}></OwnerCard>
                                </Item>
                            </Grid>
                        );
                    })}
                    <Grid item xs={4} sx={{ flexGrow: 1 }}>
                        <Item>
                            <CreateInstanceModal
                                type={"owner"}
                            ></CreateInstanceModal>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default OwnersPage;
