
// 1. Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTS:


app.use(bodyParser.urlencoded({ extended: true }));


// 3. Use the public folder for static files.
app.use(express.static("public"));//This way any static files used in the ejs can use the relative path after "public/"

// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async(req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data;
      
        console.log("Initial API Response Object: "+JSON.stringify(result))
        res.render("index.ejs", { secret: result.secret, user : result.username });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
  });

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.






// 2. Create an express app and set the port number.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
