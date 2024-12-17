var comapnyJSON={
  CompanyName:'Fluidmotion Mechatronics UAB',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'LITHUANIA (09)',
  CompanyPAN:'B76C238B7E',
  CompanyAddressLine1:'LT-62175 Kaunas, LT',
  CompanyAddressLine2:'Gyneju st. 16',
  CompanyAddressLine3:'Floor 5',
  PIN: '683584',
  companyEmail:'service@fluidmotion.lt',
  companyPhno:'+37064841505',
};
Email.send({
    Host : "smtp.fluidmotion.lt",
    Username : "proxy@fluidmotion.lt",
    Password : "password",
    To : 'reviever@fluidmotion.lt',
    From : "website@fluidmotion.lt",
    Subject : document.getElementById("256").value,
    Body : document.getElementById("256").value
}).then(
  message => alert(message)
);
