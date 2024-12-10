var comapnyJSON={
  CompanyName:'Fluidmotion Mechatronics LLC',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'JORDAN (09)',
  CompanyPAN:'B76C238B7E',
  CompanyAddressLine1:'Irbid Business Center',
  CompanyAddressLine2:'Al Jaish Street 61',
  CompanyAddressLine3:'Floor 3',
  PIN: '683584',
  companyEmail:'service@fluidmotion.net',
  companyPhno:'+918189457845',
};
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "proxy@fluidmotion.pl",
    Password : "password",
    To : 'reviever@fluidmotion.pl',
    From : "website@fluidmotion.pl",
    Subject : document.getElementById('phone').value,
    Body : document.getElementById('phone').value
}).then(
  message => alert(message)
);
