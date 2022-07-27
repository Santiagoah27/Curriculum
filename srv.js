const express =  require("express");
let app = express();

app.set("view engine","pug");
app.set("views","./view");

app.use(express.static('css'))
app.use(express.static('scripts'))
app.use(express.static('images'))

let dict = {
    user1:"juan",
    user2:"pepe",
    user3:"maria",
    user4:"luis",
    user5:"andres",
}

app.get("/",(req,resp)=>{
    resp.render("index");
});
app.get("/otra",(req,resp)=>{
    resp.render("otraruta");
});
app.get("/ruta",(req,resp)=>{
    console.log(req.params)
    let nombre = req.params.name;
    console.log(nombre);
    resp.render("form",{
        nombre:nombre,
    });
});

app.listen(5000);