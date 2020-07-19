import { Sequelize } from "sequelize-typescript";

/**
 * Method for database initialization
 */
export function initializeDb() {
    return new Sequelize({
        dialect: 'sqlite',
        storage: './src/database/database.sqlite3',
        models: [__dirname + "/../models/*.ts"], // or [Player, Team],
        modelMatch: (filename, member) => {
            return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
        },
        logging: false
    })
};
