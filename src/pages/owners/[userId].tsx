import { useRouter } from "next/router";

function UserDetails() {
    const router = useRouter();
    const userId = router.query.userId;
    return (
        <>
            <h1>The Detail Page</h1>
            <ul>
                Details:
                <li>Im a detail from Owner number {userId}</li>
                <li>And im a second detail</li>
            </ul>
        </>
    );
}

export default UserDetails;
