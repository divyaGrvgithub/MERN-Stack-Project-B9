const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Routes = require('./routes/route.js');

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes);

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/Todo",{
    useNewUrlParser: true 
})
    .then(() => {console.log("mongoDB is connected")})
    .catch((err) => {console.log(err.message)});

app.listen(process.env.Port||3001, () => {
    console.log("Express App Running on Port"+(proccess.env.Port||3001))
});