const express = require("express")
const path = require("path");
require("./db/conn")

const hbs = require("hbs")


const app = express();
const port = process.env.PORT || 8000

//path
const static_path = path.join(__dirname, "../public")
const template = path.join(__dirname, "../template/views")
const partialpath = path.join(__dirname, "../template/partials")

//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template)
hbs.registerPartials(partialpath)


app.get("/", (req,res) => {
    res.render("index")
})



app.listen(port,()=>{
    console.log(`listen at ${port}`)
})