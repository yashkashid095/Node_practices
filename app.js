// const express=require("express");//here const express is function when we call it it will return bunch of method upon calling it as you can see down below


const express=require("express")
const app=express();
const fs=require('fs');
const port=3000;
app.use(express.json())


//middle-ware is just function that modify the incoming request data(the data of the request is added to the req object in route handler by using this middle ware)
//Defining routing it means basically to determine how an application respond to a certain client request or to the url
//app.get("/",(req,res)=>{
   // res.status(200).send("hellow from the server side")//here send() only send string back to client
  // res.status(200).json({message:"hello from the server side",app:"noture"})
//})
//app.post("/",(req,res)=>{
  //  res.send("you can post to this url ")
//})
//app.listen(port,()=>{
   // console.log("server is listening to the request")
//})//it is used to start the server


const tour_data=JSON.parse(fs.readFileSync(`${__dirname}/tour.json`))


const getRouteHandler=     (req,res)=>
{
res.status(200).json({
    status:'success',
    result:tour_data.length,
    data:
    {
           tour_data
    }
})
}


const getParamRouteHandler= (req,res)=>
{
    console.log(req.params) //req.params here all the defined variables are stored
    const name=req.params.name
    const tour=tour_data.find(el=>el.name===name)
    res.status(200).json({
    status:'success',
    result:tour_data.length,
    data:
    {
           tour
    }
})
}


const postRouteHandler=(req,res)=>{
     console.log(req.body);//here body is property of req object
     res.end(`DATA ${req.body.name}`)
}
const patchRouteHandler=(req,res)=>{
     res.status(200).json({status:"true",
     data:{
          tour:"updated tour here"
     }
})
}


const deleteRouteHandler=(req,res)=>{
     res.status(204).json({message:"successfully deleted"})
}



// app.get('/api/v1/tour',getRouteHandler)
// app.get('/api/v1/tour/:name',getParamRouteHandler) //defining variable we can define more than one variable)
// app.post('/api/v1/tour',postRouteHandler)
// app.patch('/api/v1/tour/:name',patchRouteHandler)
// app.delete('/api/v1/tour/:name',deleteRouteHandler)



app.route('/api/v1/tour').get(getRouteHandler).post(postRouteHandler)
app.route('/api/v1/tour/:name').get(getParamRouteHandler).patch(patchRouteHandler).delete(deleteRouteHandler)
app.listen(port,()=>console.log("server is running"))
//yash kashid