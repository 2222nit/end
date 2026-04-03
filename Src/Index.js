const mongoose = require("mongoose")
const express = require('express');
const route = require("./Routers/UserRouters")
const dotenv = require("dotenv")
dotenv.config()


const app = express();
app.use( express.json())


mongoose.connect(process.env.mongoUrl)


.then(() => (console.log(`mongo db connect succesfully`)))
.catch((e) => (console.log(`mongo db error ${e}`)))

app.use("/", route)


app.listen(port,()=>(console.log(`this server is running to this port`)))
