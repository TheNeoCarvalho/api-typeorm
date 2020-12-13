import "reflect-metadata"
import * as express from "express"

import { createConnection } from "typeorm"
import Routes from "./routes"

const app = express()
createConnection()

app.use(express.json())
app.use(Routes)

app.listen(3333)
























// createConnection().then(async connection => {

//     // create express app
//     const app = express();
//     app.use(express.json());

//     // register express routes from defined application routes
//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//             const result = (new (route.controller as any))[route.action](req, res, next);
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

//             } else if (result !== null && result !== undefined) {
//                 res.json(result);
//             }
//         });
//     });

//     // setup express app here
//     // ...

//     // start express server
//     app.listen(3000);

//     // insert new users for test
//     await connection.manager.save(connection.manager.create(User, {
//         firstName: "Timber",
//         lastName: "Saw",
//         age: 27
//     }));
//     await connection.manager.save(connection.manager.create(User, {
//         firstName: "Phantom",
//         lastName: "Assassin",
//         age: 24
//     }));

//     console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

// }).catch(error => console.log(error));
