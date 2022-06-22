import postgres from 'postgres'

const sql = postgres('postgres://root:password@localhost:5432/TREASURE', {
    host: 'localhost',            // Postgres ip address[s] or domain name[s]
    port: 5432,          // Postgres server port[s]
    database: 'TREASURE',            // Name of database to connect to
    username: 'postgres',            // Username of database user
    password: 'password',            // Password of database user

})

export default sql

