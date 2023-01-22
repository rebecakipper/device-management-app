export type Device = {
    id: number;
    name: string;
    type: string;
    ownerId: number;
    availableSpace: number;
    battery: number;
};

export type Owner = {
    id: number;
    name: string;
};

export type DevicesList = Device[];
export type OwnersList = Owner[];
