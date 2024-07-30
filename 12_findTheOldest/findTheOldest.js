const findTheOldest = function(array) {
    let sortedArray = array.sort(compareAge);
    console.log(sortedArray);

    return sortedArray[0];
};

function compareAge(personA, personB) {

    let personAAge;
    let personBAge;

    if (!personA.yearOfDeath) {
        personAAge = (new Date().getFullYear() - personA.yearOfBirth)
    } else {
        personAAge = (personA.yearOfDeath - personA.yearOfBirth);
    }
    
    if (!personB.yearOfDeath) {
        personBAge = (new Date().getFullYear() - personB.yearOfBirth);
    } else {
        personBAge = (personB.yearOfDeath - personB.yearOfBirth);
    }

    let comparison = 0;
    if (personAAge > personBAge) {
        comparison = -1;
    } else if (personAAge < personBAge) {
        comparison = 1;
    }

    console.log(comparison)

    return comparison;
}

// Do not edit below this line
module.exports = findTheOldest;
