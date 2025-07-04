var companyJSON={
  CompanyName:'Lambda Mechatronics B.V.',
  CompanyUID:'FN 599182 a',
  Registrar:'1api.net', // semi-applicable agreement
  CompanyAddressLine:'Van Leijenberghlaan 15, 1082',
  ICC-ID1:'044574499105848816',
  ICC-ID2:'898709924417112612',
  companyEmail:'service@lambda.net',
  companyPhone:'+44 7475355392',
};
Email.send({
  Host : "dns21.hichina.com",
  Username : "ddsales3@cars-in-china.com",
  Password : "password",
  To : 'reviever@lambda.net',
  From : "website@lambda.net",
  Subject : document.getElementById("256").value,
  Body : document.getElementById("256").value
}).then(
  message => alert(message)
);
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const userId = query.user_id;
  const emailId = query.email_id;
  // Save the tracking information in a database
  console.log(`Tracking-Pixel released: User-ID ${userId}, E-Mail-ID ${emailId}`);
  // Send the SVG image as a reply
  res.writeHead(200, {'Content-Type': 'image/svg+xml'});
  res.end('<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="#ffffff" /></svg>');
}).listen(3000, () => {
  console.log('Server started on port 3000');
});
