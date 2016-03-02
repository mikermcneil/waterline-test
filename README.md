# waterline-test

a [Sails](http://sailsjs.org) application

## Steps to reproduce bug:

1. Clone this Repo
2. Run `sails lift`
3. Put something in the DB by running this in the browser: `http://localhost:1337/test/create?name=Hello`
4. Reload this link over and over and watch the memory leak: `http://localhost:1337/testthis/1`

### OR

1. Make a vanilla sails app.
2. Then run `sails generate api Test`
3. In TestController, add route that looks like this: <pre>
testGet:function(req,res)
{
  var testId = req.param('testId');
  Test.findOneById(testId).then(function(test){
    res.send("Hi");
  });
}
</pre>
4. In Test.js (model), added property `schema:true`, and property called `name` that is required and a string.
5. In route.js, added this `'get /testthis/:testId' : 'TestController.testGet'`
6. In models.js, uncomment `migrate:'alter'`
7. Reboot the server running `sails lift`
8. Put something in the DB by running this in the browser: `http://localhost:1337/test/create?name=Hello`
9. Reload this link over and over and watch the memory leak: `http://localhost:1337/testthis/1`
