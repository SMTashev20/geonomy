const axios = require('axios').default;

let cacheMap = {};

const EXPIRATION_TIME = 86_400_000 // one day in ms

async function fetchCountryData(countryName, ninjaEndpoint, ninjaKey)
{
    if (!cacheMap[countryName] || cacheMap[countryName].expiresIn < Date.now()) {
        let res = await axios.get(ninjaEndpoint + 'country?name=' + countryName, {
            headers: {
                'X-Api-Key': ninjaKey
            }
        });
        
        cacheMap[countryName] = {
            expiresIn: Date.now() + EXPIRATION_TIME,
            data: res.data[0]
        };
    }
    
    return cacheMap[countryName].data;
}

module.exports = { fetchCountryData };