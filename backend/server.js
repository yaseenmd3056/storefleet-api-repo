
import server from "./app.js";
import { connectDB } from "./config/db.js";


server.listen(3200, async (err) => {
  if (err) {
    console.log(`server failed with error ${err}`);
  } else {
    await connectDB();
    console.log(`server is running at 3200`);
  }
});
