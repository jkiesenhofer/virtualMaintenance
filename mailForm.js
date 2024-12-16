var comapnyJSON={
  CompanyName:'Fluidmotion Mechatronics UAB',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'LITHUANIA (09)',
  CompanyPAN:'B76C238B7E',
  CompanyAddressLine1:'LT-62175 Alytus, LT',
  CompanyAddressLine2:'Gyneju st. 16',
  CompanyAddressLine3:'Floor 3',
  PIN: '683584',
  companyEmail:'service@fluidmotion.lt',
  companyPhno:'+37064841505',
};
Email.send({
    Host : "smtp.fluidmotion.lt",
    Username : "proxy@fluidmotion.lt",
    Password : "password",
    To : 'reviever@fluidmotion.lt',
    From : "website@fluidmotion.lu",
    Subject : document.getElementById('phone').value,
    Body : document.getElementById('phone').value
}).then(
  message => alert(message)
);
