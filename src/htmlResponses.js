const fs = require('fs'); // file system module
// const { request } = require('http');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const style = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (_request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getStyle = (_request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(style);
  response.end();
};

module.exports = {
  getIndex,
  getStyle,
};
