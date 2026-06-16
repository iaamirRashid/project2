const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`port is listenin on this port ${port}`);
})
