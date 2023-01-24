export type Device = {
    id: number;
    device_name: string;
    device_type: string;
    available_space: number;
    battery: number;
    owned: boolean;
    owner_name: string | null;
    owner_id: number | null;
};

export type Owner = {
    id: number;
    owner_name: string;
    has_devices: boolean;
    owned_devices_list: Device[] | null;
};

export type DevicesList = Device[];
export type OwnersList = Owner[];
