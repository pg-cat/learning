module.exports = function(app){

  app.use('/',require('./index'));
  app.use('/list',require('./list'));

}
