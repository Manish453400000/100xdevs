import { app } from "./app.js";
import { connectDB } from "../config/db.js";

const startServer = async () => {
  app.listen(process.env.PORT || 8080, () => {
    console.info(
      `✅ server is running at: http://localhost:${process.env.PORT}`
    );
    console.log("😁 you are good to go now");
  });
};

(async () => {
  try {
    await connectDB();
    startServer();
  } catch (e) {
    console.log("Somthing went wrong while starting the server");
  }
})();
