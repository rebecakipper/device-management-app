import { useRouter } from "next/router";

function DeviceDetails() {
    const router = useRouter();
    const deviceId = router.query.deviceId;
    return (
        <>
            <h1>The Detail Page</h1>
            <ul>
                Details:
                <li>Im a detail from Device number {deviceId}</li>
                <li>And i a second detail</li>
            </ul>
        </>
    );
}

export default DeviceDetails;
