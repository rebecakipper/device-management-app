CREATE TABLE devices(
    id SERIAL PRIMARY KEY,
    device_name VARCHAR(255) NOT NULL CHECK(device_name !=''),
    device_type VARCHAR(255) NOT NULL CHECK(device_type !=''),
    device_owner_id VARCHAR(255) NOT NULL CHECK(device_owner_id !='') REFERENCES owners(id),
    available_space INTEGER NOT NULL,
    battery_status INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE owners(
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(255) NOT NULL CHECK(owner_name != ''),
    devices INTEGER[] REFERENCES devices(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );