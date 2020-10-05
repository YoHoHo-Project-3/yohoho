const express = require("express");
const { isValidObjectId } = require("mongoose");
const http = require("http").createServer(express);
const io = require("socket.io")(http);
const router = express.Router();

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
   io.emit('chat message', msg)
  });
});
router.get("/info", (req, res) => {
  res.json({ message: "Hello World" });
});



http.listen(3001,function(){
  console.log("listen to 3001")
})
 
module.exports = router;
