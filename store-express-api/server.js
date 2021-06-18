
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { NotFoundError } = require("./utils/error")
//const storeRouter = require("./routes/store")
//const productsRouter=require("./routes/store");
const productsRouter=require("./routes/store");
const app = express()


app.use(morgan("tiny"));
app.use(express.json())
app.use(cors())
app.use("/store",productsRouter);
 
// app.get("/", async(req, res, next) => {
//   res.status(200).json({ping: "pong"})
// })
app.use((req, res, next) => {
  return next(new NotFoundError())
})

/* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
  const status = error.status || 500
  const message = error.message

  return res.status(status).json({
    error: { message, status },
  })
})


const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
 })
