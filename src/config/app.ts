export const config = {
    debug: true,
    port: 3005,
    socketPort: 4444,
    database: {
        dialect: 'sqlite',
        path: './db.sql',
    },
    auth: {
        secret: "blabla",
        expiresIn: "365d"
    },
    minPasswordLength: 8,
};
