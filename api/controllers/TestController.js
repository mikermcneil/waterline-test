/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	testGet:function(req,res)
  {
    var testId = req.param('testId');
    
    Test.findOneById(testId).then(function(test){
      res.send("Hi");
    });
  }
};

