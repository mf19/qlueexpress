var appRouter = function (app) {

  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/qlue", function (req, res) {
    const user = {
        "h":["username","hair_color","height"],
        "d":[
                ["ali","brown",1.2],
                ["marc","blue",1.4],
                ["joe","brown",1.7],
                ["zehua","black",1.8]
            ]
        }
    data = []
    for(var i = 0; i < user.d.length; i++){
        data.push({});
        for (var j = 0; j < user.h.length; j++) {
            data[data.length-1][user.h[j]] = user.d[i][j];
        }
    }
    res.status(200).send(data);
  });

}

module.exports = appRouter;