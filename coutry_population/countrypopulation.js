// b. Get all the countries with a population of less than 2 lakhs using Filter function.
const url = "https://restcountries.com/v3.1/all";

const xml = new XMLHttpRequest();

xml.open("GET", url);

xml.send();

xml.onload = function () {
  let resData = JSON.parse(xml.response);
  const population = resData.filter((val, index) => {
    return resData[index].population < 200000;
  });

  console.log(population);
};
