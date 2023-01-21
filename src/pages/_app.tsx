import "@/styles/globals.css";
import Link from "next/link";
import type { AppProps } from "next/app";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <AddIcon />
                        </IconButton>
                        <Button color="inherit">
                            <Link href={"/devices"}>Devices</Link>
                        </Button>
                        <Button color="inherit">
                            <Link href={"/owners"}>Owners</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Component {...pageProps} />
        </>
    );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// interface LinkTabProps {
//     label?: string;
//     href?: string;
// }

// function LinkTab(props: LinkTabProps) {
//     return (
//         <Link href="/devices">
//             <Tab label="Devices" value="devices" />
//         </Link>
//     );
// }

// export default function NavTabs() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     return (
//         <Box sx={{ width: "100%" }}>
//             <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="nav tabs example"
//             >
//                 <LinkTab label="Page One" href="/drafts" />
//                 <LinkTab label="Page Two" href="/trash" />
//                 <LinkTab label="Page Three" href="/spam" />
//             </Tabs>
//         </Box>
//     );
// }
