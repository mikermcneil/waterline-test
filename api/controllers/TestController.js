/**
 * TestController
 *
 * A simple controller with a single action for the purpose of benchmarking and exploring a potential memory leak.
 */

module.exports = {
  
  /**
   * @param {String|Number} testId
   */
	testGet:function(req,res) {
    var testId = req.param('testId');
    
    Test.findOneById(testId)
    .catch(function _afterFailure (err){
      return res.serverError(err);
    })
    .then(function _afterSuccess(test){
      return res.send('Hi');
    });
  }
  
};

