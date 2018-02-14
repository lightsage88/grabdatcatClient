module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL : process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://lightsage88:Walruses8@ds119688.mlab.com:19688/grabdatcat',
  JWT_SECRET : process.env.JWT_SECRET || 'felixTheCat',
  JWT_EXPIRY : process.env.JWT_EXPIRY || '1d',
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    "https://radiant-dusk-44906.herokuapp.com"
};