const app = require('./app')

const {PORT=8080} = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})
