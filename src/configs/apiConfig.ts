const apiConfig = {
    //BE Server
    API_URL: 'http://192.168.1.4:8080',
    API_TIMEOUT_MS: 15000,
    HEADERS: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Origin, X-Auth-Token, Authorization',
    },
  }
  
  export default apiConfig
  