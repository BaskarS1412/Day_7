// a. Get all the countries from Asia continent /region using Filter function.
const URL = "https://restcountries.com/v3.1/all";

const urlObj = new XMLHttpRequest();

urlObj.open("GET", URL);

urlObj.send();

urlObj.onload = function () {
  let datas = JSON.parse(urlObj.response);
  const result = datas.filter((elament) => {
    return elament.continents[0] === "Asia";
  });

  console.log(result);
};
