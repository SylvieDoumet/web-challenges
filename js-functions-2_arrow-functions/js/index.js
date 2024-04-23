console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

// Given Function :

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

// Arrow function:

const getCurrentHour = () => {
  return new Date().getHours();
};

// Given Function :

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

// Arrow function:

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

// Given Function :

function cleanInput(string) {
  return string.toLowerCase().trim();
}

// Arrow function:

const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

// Arrow function:

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

// Classic function:

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

// Arrow function:

const add3 = (a, b, c) => a + b + c;

// Classic function:

function add3(a, b, c) {
  return a + b + c;
}

// Arrow function:

const repeat10 = (string) => string.repeat(10);

// Classic function:

function repeat10(string) {
  return string.repeat(10);
}
