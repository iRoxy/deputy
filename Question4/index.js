// For a given userId, print all the subordinate users to that user
    // Find out the user's role 
    // Find all the roles that are a subordinate of that role
    // Print all the users with a role in that set (return an array of all subordinate users to a person of that role)



const roleArr = [
    { "Id": 1, "Name": "System Administrator", "Parent": 0 },
    { "Id": 2, "Name": "Location Manager", "Parent": 1 },
    { "Id": 3, "Name": "Supervisor", "Parent": 2 },
    { "Id": 4, "Name": "Employee", "Parent": 3 },
];

const userArr = [
    { "Id": 1, "Name": "Adam Admin", "Role": 1},
    { "Id": 2, "Name": "Emily Employee", "Role": 4},
    { "Id": 3, "Name": "Location Manager", "Role": 2},
    { "Id": 4, "Name": "James Employee", "Role": 4},
    { "Id": 5, "Name": "Leroy Supervisor", "Role": 3},
]; 


// Determine a user's role
function isSubordinate(mainId, secId) {
    const role = roleArr.find(role => role.Id === mainId);
    const secRole = roleArr.find(role => role.Id === secId);

    if(role.Parent < secRole.Parent) {
        return true;
    } else {
        false;
    }

}
function getSubordinates(id) {
    let user = null;
    const subordinates = [];
    // Search for the matching user with that Id 
    userArr.forEach(usr => {
        if(usr.Id === id) {
            user = usr;
        }
    });

    // Search through the list to aggregate subordinates 
    userArr.forEach(usr => {
        if(user.Id !== usr.Id) {
            if(isSubordinate(user.Role, usr.Role)) {
                subordinates.push(usr);
            }
        }
    });
    console.log('here are the subordinates: ', subordinates);
    return subordinates;
}

getSubordinates(2);