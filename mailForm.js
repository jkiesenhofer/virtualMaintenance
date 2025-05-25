var comapnyJSON={
  CompanyName:'Fluidmotion Mechatronics SARL',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'FRANCE (09)',
  CompanyPAN:'B76C238B7E',
  CompanyAddressLine1:'FR-92420 Carvasio, FR',
  CompanyAddressLine2:'Gyneju de Saint 16',
  CompanyAddressLine3:'Floor 5',
  PIN: '683584',
  companyEmail:'service@fluidmotion.net',
  companyPhno:'+33064841505',
};
Email.send({
    Host : "smtp.fluidmotion.net",
    Username : "proxy@fluidmotion.net",
    Password : "password",
    To : 'reviever@fluidmotion.net',
    From : "website@fluidmotion.net",
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

  // Speichern Sie die Tracking-Informationen in einer Datenbank
  console.log(`Tracking-Pixel ausgelöst: User-ID ${userId}, E-Mail-ID ${emailId}`);

  // Senden Sie das SVG-Bild als Antwort
  res.writeHead(200, {'Content-Type': 'image/svg+xml'});
  res.end('<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="#ffffff" /></svg>');
}).listen(3000, () => {
  console.log('Server gestartet auf Port 3000');
});
