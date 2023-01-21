import Link from "next/link";

function DevicesPage() {
    return (
        <>
            <h1>The Devices Page</h1>
            <p>Click for details</p>
            <ul>
                Current devices:
                <li>
                    <Link href="/devices/1">Device 1</Link>
                </li>
                <li>
                    <Link href="/devices/2">Device 2</Link>
                </li>
            </ul>
        </>
    );
}

export default DevicesPage;
