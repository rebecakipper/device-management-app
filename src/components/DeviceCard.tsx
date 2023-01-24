import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import type { Device } from "@/types";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

type Props = { device: Device };

export default function DeviceCard({ device }: Props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <DeviceHubIcon />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Link href={"/devices/" + device.id + "/edit"}>
                            <EditIcon />
                        </Link>
                    </IconButton>
                }
                title={device.device_name}
                subheader={device.device_type}
            />
            <CardHeader
                avatar={
                    device.owned ? (
                        <>
                            <Typography align="center" variant="subtitle1">
                                Owner:{" " + device.owner_name}
                                <IconButton aria-label="owner-profile">
                                    <Link href={"/devices/" + device.owner_id}>
                                        <AccountCircleIcon />
                                    </Link>
                                </IconButton>
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography align="center" variant="subtitle1">
                                assign to an owner
                                <IconButton aria-label="owner-profile">
                                    <Link
                                        href={"/devices/" + device.id + "/edit"}
                                    >
                                        <AddCircleIcon />
                                    </Link>
                                </IconButton>
                            </Typography>
                        </>
                    )
                }
                action={
                    <Typography align="center" variant="subtitle1">
                        Available space: {device.available_space}Mb
                    </Typography>
                }
                title={
                    <Typography align="center" variant="subtitle1">
                        Batery: {device.battery}%
                    </Typography>
                }
            />

            {/* <CardContent>
                {device.owned ? (
                    <>
                        <Typography align="left" variant="subtitle1">
                            Owner:{" " + device.owner_name}
                            <IconButton aria-label="owner-profile">
                                <Link href={"/owners/" + device.owner_id}>
                                    <AccountCircleIcon />
                                </Link>
                            </IconButton>
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography align="left" variant="subtitle1">
                            assign to an owner
                            <IconButton aria-label="owner-profile">
                                <Link href={"/owners/" + device.id + "/edit"}>
                                    <AddCircleIcon />
                                </Link>
                            </IconButton>
                        </Typography>
                    </>
                )}
                <Typography align="left" variant="subtitle1">
                    Batery: {device.battery}%
                </Typography>
                <Typography align="left" variant="subtitle1">
                    Available space: {device.available_space}Mb
                </Typography>
            </CardContent> */}
        </Card>
    );
}
