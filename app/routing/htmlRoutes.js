// routes
app.get('/view', function(req, res){
    res.sendFile(path.join(__dirname, 'view.html'))
});

// routes
app.get('/make', function(req, res){
    res.sendFile(path.join(__dirname, 'make.html'))
});


// routes
// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'home.html'))
// });

