const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://socialNetworkAPI:Howkey%402011@tpcbr-4-project.ou5hsth.mongodb.net/userThoughtDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;