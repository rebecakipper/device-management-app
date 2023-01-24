import CreateOwnerForm from "@/components/CreateOwnerForm";
import { useRouter } from "next/router";

function EditOwner() {
    const router = useRouter();
    const userId = router.query.userId;
    return (
        <>
            <CreateOwnerForm></CreateOwnerForm>
        </>
    );
}
export default EditOwner;
