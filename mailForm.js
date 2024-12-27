var comapnyJSON={
  CompanyName:'Fluidmotion Mechatronics SARL',
  CompanyGSTIN:'37B76C238B7E1Z5',
  CompanyState:'FRANCE (09)',
  CompanyPAN:'B76C238B7E',
  CompanyAddressLine1:'FR-92420 Carvasio, FR',
  CompanyAddressLine2:'Gyneju de Saint 16',
  CompanyAddressLine3:'Floor 5',
  PIN: '683584',
  companyEmail:'service@fluidmotion.fr',
  companyPhno:'+33064841505',
};
Email.send({
    Host : "smtp.fluidmotion.at",
    Username : "proxy@fluidmotion.fr",
    Password : "password",
    To : 'reviever@fluidmotion.fr',
    From : "website@fluidmotion.fr",
    Subject : document.getElementById("256").value,
    Body : document.getElementById("256").value
}).then(
  message => alert(message)
);
