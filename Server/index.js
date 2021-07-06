const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const dotenv=require("dotenv")
dotenv.config()
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {       //socket connected     
	socket.emit("me", socket.id);        //passing ur id

	socket.on("disconnect", () => {      
		socket.broadcast.emit("callEnded")       //to end connection
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));