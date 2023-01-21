import Link from "next/link";
import DeviceCardList from "@/components/DeviceCardList";

let listOfDevices = [
    {
        id: 5,
        name: "device A",
        type: "laptop",
        ownerId: 2,
        availableSpace: 50,
        battery: 89,
    },
    {
        id: 2,
        name: "device B",
        type: "laptop",
        ownerId: 3,
        availableSpace: 7,
        battery: 55,
    },
];

function HomePage() {
    return (
        <>
            <DeviceCardList devices={listOfDevices}></DeviceCardList>
        </>
    );
}

export default HomePage;
