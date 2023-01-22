import Link from "next/link";
import CreateInstanceModal from "@/components/CreateInstanceModal";

function OwnersPage() {
    return (
        <>
            <h1>The Owners Tab</h1>
            <ul>
                <li>
                    <Link href="/owners/1"> Owner 1</Link>
                </li>
                <li>
                    <Link href="/owners/2">Owner 2</Link>
                </li>
            </ul>
            <CreateInstanceModal type={"owner"}></CreateInstanceModal>
        </>
    );
}

export default OwnersPage;
