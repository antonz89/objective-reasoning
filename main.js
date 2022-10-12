// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//------------------------------------------------------------------

let user = {
    firstName: String,
    lastname: String,
    userRole: String
}

function isAdmin (user){
    if (user.userRole === 'ADMIN'){
        return true;
    } else {
        return false;
    }
}

console.log(isAdmin({
    firstName: 'AAA',
    lastname: 'BBB',
    userRole: 'ADMIN'
}));

//-------------------------------------------------------------------

let user1 = {
    firstName: 'BrIaN',
    lastName: 'CarElA',
}

function getEmail(user1){
    let x = user1.firstName.toLowerCase();
    let y = user1.lastName.toLowerCase();
    return `${x}.${y}@codeimmersives.com`;
}

console.log(getEmail(user1));

//-------------------------------------------------------------------
 
function getPlaylistLength (playlist){
    return playlist.songs.length
}

console.log(getPlaylistLength({
    name: 'hits',
    songs: []
}));
//-------------------------------------------------------------------

function getHardestHomework(hwArray){

    if(hwArray.length === 0){
        return '';
    }
    let lowestHw = hwArray[0];
    // console.log(hwArray[0].averageScore);

    for(let i = 0;i<hwArray.length;i++){
        if(hwArray[i].averageScore<lowestHw.averageScore){
            lowestHw=hwArray[i];
        }
    }
    return lowestHw.name;
}

console.log(getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
]));
//-------------------------------------------------------------------

function createPhonebook(names,numbers){
    let phonebook = {};

    for( let i = 0;i<names.length  ; i++){
        phonebook[names[i]] = numbers[i];
    }
return phonebook;

}

console.log(createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424']));











// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};