var userData = [
    { "Id": 14, "DisplayName": "Jose Carreras", "Location": 1, "Role": 55 },
    { "Id": 15, "DisplayName": "Anna Karenina", "Location": 2, "Role": 55 },
];

var roleData = [
  { "Id": 3, "Name": "System Administrator", "ParentRole": 0 },
  { "Id": 4, "Name": "Supervisor", "ParentRole": 61 },
  { "Id": 61, "Name": "Location Manager", "ParentRole": 5 },
  { "Id": 55, "Name": "Employee", "ParentRole": 3 },
];

var locationData = [
  { "Id": 1, "Name": "Potts Point" },
  { "Id": 2, "Name": "Lannister" },
];

function getRoleName(id) {
  let result = 'hello';
  roleData.forEach(role => {
    if(role.Id === id) {
      result = role.Name;
    }
  });
  return result;
}

function getLocationName(id) {
  let result = null;
  locationData.forEach(location => {
    if(location.Id === id) {
      result = location.Name;
    }
  });
  return result;
}

function createCard(cardData) {
  var cardTemplate = [
    '<tr><td><div>',
    '<div class="m-team-name">',
    cardData.DisplayName || 'No name provided',
    '</div><p>',
    getRoleName(cardData.Role) || 'No job provided',
    '</p></div></td>',
    '<td class="text-small" style="table-cell">',
    getLocationName(cardData.Location) || 'No location provided',
    '</td>',
    '<td><input class="button" type="submit" value="View"></input></td></tr>',
  ];

  // a jQuery node
  return $(cardTemplate.join(''));
}

var userData = [
    { "Id": 14, "DisplayName": "Jose Carreras", "Location": 1, "Role": 55 },
    { "Id": 15, "DisplayName": "Anna Karenina", "Location": 2, "Role": 55 },
];

var roleData = [
  { "Id": 3, "Name": "System Administrator", "ParentRole": 0 },
  { "Id": 4, "Name": "Supervisor", "ParentRole": 61 },
  { "Id": 61, "Name": "Location Manager", "ParentRole": 5 },
  { "Id": 55, "Name": "Employee", "ParentRole": 3 },
];

var locationData = [
  { "Id": 1, "Name": "Potts Point" },
  { "Id": 2, "Name": "Lannister" },
];



var cards = $();
// Store all the card nodes
userData.forEach(function(item, i) {
  cards = cards.add(createCard(item));
});


// Add them to the page... for instance the <body>
$(function() {
  $('tbody').append(cards);
});
