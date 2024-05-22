
// Self Directed Learning 3

// 1 - Generate an email address

function generateEmail (user) {

    const { firstName, lastName } = user;

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@neuefische.de`;

    return email;

}


// function check

const user = {

    firstName = Andrea,
    lastName = Hohnsen
}


const email = generateEmail(user);
console.log(email); 


// 2 - Guess the first and last name from email 

