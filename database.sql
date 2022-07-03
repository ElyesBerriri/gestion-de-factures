-- CREATE DATABASE lawyerdb;

--\c lawyerdb

CREATE TABLE clients(
  client_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
/*
/*
PG_USER = 'zsznyizkkkcajf'
PG_PASSWORD = '12219a47c87504058c972981b94a4a976459b540af8bbeab45c4c2078f520c15'
PG_HOST = 'ec2-34-239-241-121.compute-1.amazonaws.com'
PG_PORT = 5432
PG_DATABASE = 'dc3ehlbffdntdk'
*/