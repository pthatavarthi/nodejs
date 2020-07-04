const https = require('https');
const options = {
    host: 'ptrqe.sabacloud.com',
    path: '/Saba/api/login',
    headers: {
        user: 'praneeth',
        password: 'welcome1',
        site: 'PTRQE'
    }
}
https.get(options, (res) => {
  console.log('statusCode:', res.statusCode);
  
  res.on('data', (data) => {
    console.log('api succeeded')
    console.log(data)
    var result = JSON.parse(data)
    console.log(result.certificate)

  });

}).on('error', (e) => {
    console.error('error occurred') 
    console.error(e)
});