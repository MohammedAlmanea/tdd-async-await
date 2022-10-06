/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(countryName: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/name/${countryName}`
  );
  const data = getApi.data;
  const basicData = {
    capital: data[0].capital,
    region: data[0].region,
    numericCode: data[0].numericCode,
  };
  return basicData;
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */

export default {
  getCountry,
  getRegionCountries,
  // getRegionCapitals
};
