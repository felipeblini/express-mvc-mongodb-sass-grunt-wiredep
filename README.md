#Express Project Generator
##MVC, Handlebars, Grunt, Sass, MongoDb and based on HTML5 Boilerplate Optimizations
###Grunt-wiredep ready and MongoDb ready

This is the same **Yeoman Generator-Express MVC** choosing the option above.

I've just added the task `grunt-wiredep` and `grunt-string-replace` to inject all dependencies installed via Bower.

To see it working run `gulp watch` or just `gulp` and in another console install any package like `bower install lato --save`.

You need to put the option `--save` because the watching task is whatching for changes at the `bower.json` file.

I also have added the **HTML5 Boilerplate** codes/files https://html5boilerplate.com/
- Robots.txt
- Google Analytics
- Apple and Windows Icons
- Browser and Crossdomain xml's
- and its Node.js server configs https://github.com/h5bp/server-configs-node.

To see in the browser: run `grunt` and open `localhost:3000`

If you want to connect to your local MongoDb, uncomment the folloeing block in `app.js`

```javascript
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});