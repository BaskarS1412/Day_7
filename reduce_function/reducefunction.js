// d. Print the total population of countries using reduce function.

const url = "https://restcountries.com/v3.1/all";

const objXml = new XMLHttpRequest();

objXml.open("GET", url);

objXml.send();

objXml.onload = function () {
  let resValue = JSON.parse(objXml.response);

  let tolatPopulation = resValue.reduce((acc, currentvalue) => {
    return acc + currentvalue.population;
  }, 0);
  console.log(tolatPopulation);
};
