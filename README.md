# waterline-test

a [Sails](http://sailsjs.org) application

Steps to reproduce bug:

Make a vanilla sails app.

Then run `sails generate api Test`

In TestController, add route that looks like this: `testGet:function(req,res)
  {
    var testId = req.param('testId');
    
    Test.findOneById(testId).then(function(test){
      res.send("Hi");
    });
  }`

In Test.js (model), added property called schema:true, and property called name that is required and a string.

In route.js, added this `'get /testthis/:testId' : 'TestController.testGet',`

In models.js, modified so migrate is on

Once all this, lift server, and make a model, by doing this: `http://localhost:1337/test/create?name=Hello`

Finally, reload this link and watch the memory leak: `http://localhost:1337/testthis/1`