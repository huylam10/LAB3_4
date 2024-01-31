const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nhlam151003:manmat151003@cluster0.ffxv3x0.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("keest nooi hahvsdvas");
    })
    .catch((err) => {
        console.log("error connecting to server");
        console.log(err);
    })

module.exports = { mongoose }