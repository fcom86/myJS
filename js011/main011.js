var friends = {};
friends.proton = {
  firstName: "Proton",
  lastName: "Professor",
  number: "+7921784511",
  address: ['nevsky av','saint-petersburg','Spb','197022']
};
friends.ivan = {
  firstName: "Ivan",
  lastName: "Petrov",
  number: "+79218852311",
  address: ['mechnikova str.','Saint-Petesburg','spb','195011']
};

var list = function(obj) {
  for(var prop in obj) {
    alert(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      alert(friends[prop]);
      return friends[prop];
    }
  }
};

alert (list(friends));
alert (search ('ivan'));
