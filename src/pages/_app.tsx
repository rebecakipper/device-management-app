import "@/styles/globals.css";
import Link from "next/link";
import type { AppProps } from "next/app";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
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
