const findTheOldest = function (arr) {
  // let currYear = new Date().getFullYear();
  // let oldestPerson,
  //   oldestPersonAge = 0;
  // arr.forEach((person) => {
  //   let age;
  //   if (person.yearOfDeath) age = person.yearOfDeath - person.yearOfBirth;
  //   else age = currYear - person.yearOfBirth;
  //   if (age > oldestPersonAge) {
  //     oldestPersonAge = age;
  //     oldestPerson = person;
  //   }
  // });
  // return oldestPerson;

  //method 2
  return arr.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });

};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
