const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(morgan("dev"));

// const uri =
//   process.env.NODE_ENV === "production"
//     ? process.env.MONGO_KEY
//     : process.env.MONGO_KEY_DEV;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("Mongoose Connection good");
// });

app.use(cors());
app.use(express.json());

const postsRouter = require("./routes/posts");

app.get("/speech", (req, res) => {
  try {
     function main() {
      // Imports the Google Cloud client library
      const speech = require("@google-cloud/speech");
      const fs = require("fs");
      const client = new speech.SpeechClient();

      /**
       * TODO(developer): Uncomment the following lines before running the sample.
       */
      const filename = './audio.wav';
      const encoding = 'LINEAR16';
      const sampleRateHertz = 16000;
      const languageCode = 'en-US';
      
      const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
      };
      
      const audio = {
        content: fs.readFileSync(filename).toString('base64'),
      };
      
      const request = {
        config: config,
        audio: audio,
      };
      
      // Detects speech in the audio file
      const [response] = client.recognize(request).then(res => res);
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
      console.log('Transcription: ', transcription);
    }
    main();
  } catch (err) {
    console.log("err", err);
  }
});

app.use("/posts", postsRouter);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("fe/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/fe/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
