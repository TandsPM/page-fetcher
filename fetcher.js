const fetcher = require('request'); // HTTP request
const fs = require('fs'); // file system operations

const url = 'http://www.example.edu/index.html';
const localPath = 'path/to/local/file.html';

const fetchAndSave = function (url, localPath) {

  // check if either url or localPath is falst - if yes, log error
  if (!url || !localPath) {
    console.log("Two parameters required...");
    console.log("Usage: node fetcher.js <url> <local-path>");
    return;
  }

  // is there an issue grabbing the content of the URL
  fetcher(url, (error, response, body) => {
    if (error) {
      console.log("Failed to download resource: ", error);
      return;
    }

    // if request is successful - write content to local Path
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log("Failed to write to localPath:", localPath);
      }

      console.log(`downloaded and saved ${body.length} bytes to ${localPath}`);
    });
  });
};

fetchAndSave(url, localPath);