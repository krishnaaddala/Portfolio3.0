$.get("/api/projects", function(err, data){
    if(err){
        throw err;
    }
    else {
        console.log(data);
        //train schedule HW check that to dynamically build the components

    }
})