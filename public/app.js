$.get("/api/projects", function(err, data){
    if(err){
        throw err;
    }
    else {
        console.log(data);
        //logic to dynamically build the components

    }
})