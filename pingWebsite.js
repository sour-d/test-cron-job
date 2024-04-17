import axios from "axios";
import fs from "fs";

const pingWebsite = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(`Response time: ${response.headers["x-response-time"]}`);
    fs.writeFileSync(
      "file.txt",
      `${response.data} ${Date.now().toLocaleString()}`,
      { flag: "a", encoding: "utf8" }
    );
  } catch (error) {
    console.error(error);
  }
};

const main = () => {
  setInterval(() => {
    pingWebsite(process.env.URL + "/ping");
  }, 60000);
};

export default main;
