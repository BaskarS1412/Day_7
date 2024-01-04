// e. Print the country that uses US dollars as currency.
const givenURL = "https://restcountries.com/v3.1/all";

const xmlObj = new XMLHttpRequest();

xmlObj.open("GET", givenURL);

xmlObj.send();

xmlObj.onload = function () {
  let resDatas = JSON.parse(xmlObj.response);

  let currencies = resDatas.filter((elemnt) => {
    for (let key in elemnt.currencies) {
      if (elemnt.currencies[key].name === "United States dollar") {
        return elemnt;
      }
    }
  });
  console.log(currencies);
};
