fetch()
.then((response)=>{
    console.log(response);
    return response/JSON();
})
.then((data)=> console.log(data))
.catch((data))=> 
{}