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
import type { Owner } from "@/types";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DevicesIcon from "@mui/icons-material/Devices";

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

type Props = { owner: Owner };

export default function OwnerCard({ owner }: Props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <AccountCircleIcon />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Link href={"/owners/" + owner.id + "/edit"}>
                            <EditIcon />
                        </Link>
                    </IconButton>
                }
                title={owner.owner_name}
            />

            <CardContent>
                {owner.has_devices ? (
                    <>
                        <IconButton aria-label="owner-profile">
                            <Link href={"/owners/" + owner.id}>
                                <DevicesIcon />
                            </Link>
                        </IconButton>
                        <Typography align="center" variant="subtitle2">
                            Click to see {owner.owner_name}'s devices
                        </Typography>
                    </>
                ) : (
                    <>
                        <IconButton aria-label="owner-profile">
                            <Link href={"/owner/" + owner.id + "/edit"}>
                                <AddCircleIcon />
                            </Link>
                        </IconButton>
                        <Typography align="center" variant="subtitle2">
                            Assign a device to {owner.owner_name}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
