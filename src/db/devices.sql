DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS devices CASCADE;
DROP TABLE IF EXISTS ownerships CASCADE;
DROP TYPE IF EXISTS DEVICE_TYPE;

CREATE TYPE DEVICE_TYPE AS ENUM('Laptop','Camera','Tablet','Smartphone');

CREATE TABLE devices(
    id SERIAL PRIMARY KEY,
    device_name VARCHAR(255) NOT NULL CHECK(device_name !=''),
    device_type DEVICE_TYPE NOT NULL,
    available_space INTEGER NOT NULL,
    battery_status INTEGER NOT NULL,
    owned BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE owners(
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(255) NOT NULL CHECK(owner_name != '') UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

 CREATE TABLE ownerships(
    id SERIAL PRIMARY KEY,
    owner_id  INTEGER NOT NULL REFERENCES owners(id),
    device_id INTEGER NOT NULL REFERENCES devices(id)UNIQUE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );   

INSERT INTO 
    devices (device_name, device_type, available_space, battery_status, owned)
VALUES 
    ('A', 'Laptop', 360, 100,TRUE),
    ('B', 'Tablet', 40, 97,TRUE),
    ('C', 'Camera', 2360, 70,TRUE),
    ('D', 'Smartphone', 540, 40,FALSE),
    ('E', 'Laptop',50, 10,TRUE);

INSERT INTO 
    owners (owner_name)
VALUES 
    ('Bob'),
    ('John'),
    ('Mark'),
    ('Arnold'),
    ('Elliot');

INSERT INTO 
    ownerships (owner_id,device_id)
VALUES 
    (1,1),
    (1,2),
    (2,3),
    (4,5);

