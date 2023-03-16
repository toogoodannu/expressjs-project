const express = require("express");
const app = express();
const port= 8000;
const path=require("path");
const hbs = require("hbs");
//public static path

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../src/templates/views");
const partials_path = path.join(__dirname,"../src/templates/partials");

console.log(path.join(__dirname,"../public"));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));
app.get("",(req,res)=> {

    res.render("index")
    })

    app.get('/about',(req,res)=> {
        res.render('about')
        })
        app.get("/weather",(req,res)=> {

            res.render("weather");
            })
            app.get("*",(req,res)=> {

                res.render("404error", {
                    errorMsg : "Opps! Page Not Found"
                })
                })
    


    app.listen(port, ()=>{
console.log(`listening to the port at ${port}`)

    });
