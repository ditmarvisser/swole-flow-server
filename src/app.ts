// import express, { Application, Request, Response, NextFunction } from 'express';
// import { Sequelize, Model, DataTypes } from 'sequelize';
// import { initializeDb } from './db/database';
// const app: Application = express();
// const port = 5000;

// const add = (a: number, b: number): number => a + b;

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//     console.log(add(5, 5));
//     res.send("Hello World!")
// });

// app.listen(port, () =>
//     console.log(`Server running on port: http://localhost:${port}`)
// );

// const sequelize = initializeDb;

// // class User extends Model { }
// // User.init({
// //     username: DataTypes.STRING,
// //     birthday: DataTypes.DATE
// // }, { sequelize, modelName: 'user' });

// // (async () => {
// //     await sequelize.sync();
// //     const jane = await User.create({
// //         username: 'janedoe',
// //         birthday: new Date(1980, 6, 20)
// //     });
// //     console.log(jane.toJSON());
// // })();