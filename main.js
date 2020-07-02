global.fetch = require('node-fetch');
const clientLib = require('./index');

// Initializing a client to return content in the store's primary language
const client = clientLib.buildClient({
  domain: 'lauridukaan.myshopify.com',
  storefrontAccessToken: '1daf49e906c0433bae0335731776facf'
});

console.log('Inside the main.js file', client);

// const apiDetails = {
//   domain: 'lauridukaan.myshopify.com',
//   storefrontAccessToken: '1daf49e906c0433bae0335731776facf'
// };

// client.setup(apiDetails);
const category = async () => {
  return await client.collection.fetchAll();
}

console.log('All Categories are', category());
