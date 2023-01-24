import CreateDeviceForm from "@/components/CreateDeviceForm";
import { useRouter } from "next/router";

function EditDevice() {
    const router = useRouter();
    const deviceId = router.query.deviceId;
    return (
        <>
            <CreateDeviceForm></CreateDeviceForm>
        </>
    );
}

export default EditDevice;
