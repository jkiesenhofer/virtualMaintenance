var comapnyJSON={
  CompanyName:'Lambda Mechatronics B.V.',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'NETHERLANDS (09)',
  CompanyPAN:'ATU16090307',
  CompanyAddressLine1:'NL-2595BM The Hague',
  CompanyAddressLine2:'Prinses Beatrixlaan 582',
  CompanyAddressLine3:'Floor 5',
  ICC-ID: '898709924417112612',
  companyEmail:'service@lambda.net',
  companyPhno:'+44 7475355392',
};
Email.send({
  Host : "smtp.lambda.net",
  Username : "office@greenjet.shop",
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
