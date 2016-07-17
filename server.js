var express=require('express');
var app=express();
var bp=require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));//to serve static 




app.get('/',function(req,res){
	res.send("Hello World");
});


app.listen(2000,'127.0.0.1');



