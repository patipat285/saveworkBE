var mongoose = require('mongoose');


// mongoose.connect('mongodb://10.1.2.144:27017/savework', {
//   useNewUrlParser: true
// });

mongoose.connect('mongodb://localhost:27017/saveWork', {
  useNewUrlParser: true
});

mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection open");
});

mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection error:" + err);
});

mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection disconnection");
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection disconnection through app termition"
    );
    process.exit(0);
  });
});
