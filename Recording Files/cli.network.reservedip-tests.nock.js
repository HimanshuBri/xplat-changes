// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: ['website', 'website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fe1ba99eb3947fc78f7e2c58f3e011fc',
  date: 'Mon, 09 Mar 2015 10:19:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fe1ba99eb3947fc78f7e2c58f3e011fc',
  date: 'Mon, 09 Mar 2015 10:19:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '73cdb76826c777d0b7412c792daa86df',
  date: 'Mon, 09 Mar 2015 10:19:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '73cdb76826c777d0b7412c792daa86df',
  date: 'Mon, 09 Mar 2015 10:19:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1155960b1d007afb847f9ba44af6031c',
  date: 'Mon, 09 Mar 2015 10:20:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1155960b1d007afb847f9ba44af6031c',
  date: 'Mon, 09 Mar 2015 10:20:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/73cdb76826c777d0b7412c792daa86df')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>73cdb768-26c7-77d0-b741-2c792daa86df</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '16700145c3587165a6ea7b003e62f996',
  date: 'Mon, 09 Mar 2015 10:20:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/73cdb76826c777d0b7412c792daa86df')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>73cdb768-26c7-77d0-b741-2c792daa86df</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '16700145c3587165a6ea7b003e62f996',
  date: 'Mon, 09 Mar 2015 10:20:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f65d14b669967c299089843aaeecc9f9',
  date: 'Mon, 09 Mar 2015 10:20:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f65d14b669967c299089843aaeecc9f9',
  date: 'Mon, 09 Mar 2015 10:20:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips')
  .reply(200, "<ReservedIPs xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ReservedIP><Name>clitestrip</Name><Address>137.135.36.25</Address><Id>93728c5a-9483-4bb6-b7f3-cf838fdeae2f</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip3</Name><Address>23.100.101.79</Address><Id>7c432b31-5eb8-4efc-b066-c38ecfa114dc</Id><Label>JapanEastReservedIP</Label><State>Created</State><Location>Japan East</Location></ReservedIP><ReservedIP><Name>testresip4</Name><Address>23.100.44.3</Address><Id>b4148f22-9f32-479a-bc3b-16bad33a1a47</Id><Label>WestUSDuplicateReservedIP</Label><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip5</Name><Address>23.101.18.178</Address><Id>1395bcde-3d90-4a74-9370-402309b85db7</Id><Label>SoutheastAsiaReservedIP</Label><State>Created</State><Location>Southeast Asia</Location></ReservedIP><ReservedIP><Name>testresip6</Name><Address>191.237.249.203</Address><Id>70a69b0f-3516-4c5e-b8ba-2e5256b88733</Id><Label>BrazilSouthReservedIP</Label><State>Created</State><Location>Brazil South</Location></ReservedIP><ReservedIP><Name>testresip7</Name><Address>23.101.53.247</Address><Id>9f454c53-4077-4623-a6f7-931f6c055240</Id><Label>NorthEuropeReservedIP</Label><State>Created</State><Location>North Europe</Location></ReservedIP><ReservedIP><Name>xplatresIp</Name><Address>104.40.60.85</Address><Id>c2a8a9b3-0be0-488b-a3f8-d66e7bae1ca0</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>xplatrip</Name><Address>23.101.200.161</Address><Id>e0b7b14b-7696-40de-8d1e-5e1430a7241d</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP</Name><Address>104.40.52.38</Address><Id>6961661f-9e47-4a59-b9bd-f0df926b8ec5</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP6</Name><Address>104.40.93.208</Address><Id>e5a2beeb-fb4c-4da0-9b0c-5a499884d0cb</Id><State>Created</State><Location>West US</Location></ReservedIP></ReservedIPs>", { 'cache-control': 'no-cache',
  'content-length': '2085',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '911990c952b276998fd7c687a308a586',
  date: 'Mon, 09 Mar 2015 10:20:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips')
  .reply(200, "<ReservedIPs xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ReservedIP><Name>clitestrip</Name><Address>137.135.36.25</Address><Id>93728c5a-9483-4bb6-b7f3-cf838fdeae2f</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip3</Name><Address>23.100.101.79</Address><Id>7c432b31-5eb8-4efc-b066-c38ecfa114dc</Id><Label>JapanEastReservedIP</Label><State>Created</State><Location>Japan East</Location></ReservedIP><ReservedIP><Name>testresip4</Name><Address>23.100.44.3</Address><Id>b4148f22-9f32-479a-bc3b-16bad33a1a47</Id><Label>WestUSDuplicateReservedIP</Label><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip5</Name><Address>23.101.18.178</Address><Id>1395bcde-3d90-4a74-9370-402309b85db7</Id><Label>SoutheastAsiaReservedIP</Label><State>Created</State><Location>Southeast Asia</Location></ReservedIP><ReservedIP><Name>testresip6</Name><Address>191.237.249.203</Address><Id>70a69b0f-3516-4c5e-b8ba-2e5256b88733</Id><Label>BrazilSouthReservedIP</Label><State>Created</State><Location>Brazil South</Location></ReservedIP><ReservedIP><Name>testresip7</Name><Address>23.101.53.247</Address><Id>9f454c53-4077-4623-a6f7-931f6c055240</Id><Label>NorthEuropeReservedIP</Label><State>Created</State><Location>North Europe</Location></ReservedIP><ReservedIP><Name>xplatresIp</Name><Address>104.40.60.85</Address><Id>c2a8a9b3-0be0-488b-a3f8-d66e7bae1ca0</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>xplatrip</Name><Address>23.101.200.161</Address><Id>e0b7b14b-7696-40de-8d1e-5e1430a7241d</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP</Name><Address>104.40.52.38</Address><Id>6961661f-9e47-4a59-b9bd-f0df926b8ec5</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP6</Name><Address>104.40.93.208</Address><Id>e5a2beeb-fb4c-4da0-9b0c-5a499884d0cb</Id><State>Created</State><Location>West US</Location></ReservedIP></ReservedIPs>", { 'cache-control': 'no-cache',
  'content-length': '2085',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '911990c952b276998fd7c687a308a586',
  date: 'Mon, 09 Mar 2015 10:20:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6bda3985bc6a7a46bf961ad0625fc3cc',
  date: 'Mon, 09 Mar 2015 10:20:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6bda3985bc6a7a46bf961ad0625fc3cc',
  date: 'Mon, 09 Mar 2015 10:20:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips')
  .reply(200, "<ReservedIPs xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ReservedIP><Name>clitestrip</Name><Address>137.135.36.25</Address><Id>93728c5a-9483-4bb6-b7f3-cf838fdeae2f</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip3</Name><Address>23.100.101.79</Address><Id>7c432b31-5eb8-4efc-b066-c38ecfa114dc</Id><Label>JapanEastReservedIP</Label><State>Created</State><Location>Japan East</Location></ReservedIP><ReservedIP><Name>testresip4</Name><Address>23.100.44.3</Address><Id>b4148f22-9f32-479a-bc3b-16bad33a1a47</Id><Label>WestUSDuplicateReservedIP</Label><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip5</Name><Address>23.101.18.178</Address><Id>1395bcde-3d90-4a74-9370-402309b85db7</Id><Label>SoutheastAsiaReservedIP</Label><State>Created</State><Location>Southeast Asia</Location></ReservedIP><ReservedIP><Name>testresip6</Name><Address>191.237.249.203</Address><Id>70a69b0f-3516-4c5e-b8ba-2e5256b88733</Id><Label>BrazilSouthReservedIP</Label><State>Created</State><Location>Brazil South</Location></ReservedIP><ReservedIP><Name>testresip7</Name><Address>23.101.53.247</Address><Id>9f454c53-4077-4623-a6f7-931f6c055240</Id><Label>NorthEuropeReservedIP</Label><State>Created</State><Location>North Europe</Location></ReservedIP><ReservedIP><Name>xplatresIp</Name><Address>104.40.60.85</Address><Id>c2a8a9b3-0be0-488b-a3f8-d66e7bae1ca0</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>xplatrip</Name><Address>23.101.200.161</Address><Id>e0b7b14b-7696-40de-8d1e-5e1430a7241d</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP</Name><Address>104.40.52.38</Address><Id>6961661f-9e47-4a59-b9bd-f0df926b8ec5</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP6</Name><Address>104.40.93.208</Address><Id>e5a2beeb-fb4c-4da0-9b0c-5a499884d0cb</Id><State>Created</State><Location>West US</Location></ReservedIP></ReservedIPs>", { 'cache-control': 'no-cache',
  'content-length': '2085',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'bcb9e251eb6e79879c37c892b5baa797',
  date: 'Mon, 09 Mar 2015 10:20:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips')
  .reply(200, "<ReservedIPs xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ReservedIP><Name>clitestrip</Name><Address>137.135.36.25</Address><Id>93728c5a-9483-4bb6-b7f3-cf838fdeae2f</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip3</Name><Address>23.100.101.79</Address><Id>7c432b31-5eb8-4efc-b066-c38ecfa114dc</Id><Label>JapanEastReservedIP</Label><State>Created</State><Location>Japan East</Location></ReservedIP><ReservedIP><Name>testresip4</Name><Address>23.100.44.3</Address><Id>b4148f22-9f32-479a-bc3b-16bad33a1a47</Id><Label>WestUSDuplicateReservedIP</Label><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>testresip5</Name><Address>23.101.18.178</Address><Id>1395bcde-3d90-4a74-9370-402309b85db7</Id><Label>SoutheastAsiaReservedIP</Label><State>Created</State><Location>Southeast Asia</Location></ReservedIP><ReservedIP><Name>testresip6</Name><Address>191.237.249.203</Address><Id>70a69b0f-3516-4c5e-b8ba-2e5256b88733</Id><Label>BrazilSouthReservedIP</Label><State>Created</State><Location>Brazil South</Location></ReservedIP><ReservedIP><Name>testresip7</Name><Address>23.101.53.247</Address><Id>9f454c53-4077-4623-a6f7-931f6c055240</Id><Label>NorthEuropeReservedIP</Label><State>Created</State><Location>North Europe</Location></ReservedIP><ReservedIP><Name>xplatresIp</Name><Address>104.40.60.85</Address><Id>c2a8a9b3-0be0-488b-a3f8-d66e7bae1ca0</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>xplatrip</Name><Address>23.101.200.161</Address><Id>e0b7b14b-7696-40de-8d1e-5e1430a7241d</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP</Name><Address>104.40.52.38</Address><Id>6961661f-9e47-4a59-b9bd-f0df926b8ec5</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>XplatTestRIP6</Name><Address>104.40.93.208</Address><Id>e5a2beeb-fb4c-4da0-9b0c-5a499884d0cb</Id><State>Created</State><Location>West US</Location></ReservedIP></ReservedIPs>", { 'cache-control': 'no-cache',
  'content-length': '2085',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'bcb9e251eb6e79879c37c892b5baa797',
  date: 'Mon, 09 Mar 2015 10:20:23 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1b5ba9697d107ce1a2ccbdeadc906cbd',
  date: 'Mon, 09 Mar 2015 10:20:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1b5ba9697d107ce1a2ccbdeadc906cbd',
  date: 'Mon, 09 Mar 2015 10:20:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips/clitestrip')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'a8e5d81fed097b14802b77a560d41dc8',
  date: 'Mon, 09 Mar 2015 10:20:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips/clitestrip')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'a8e5d81fed097b14802b77a560d41dc8',
  date: 'Mon, 09 Mar 2015 10:20:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8f8808232e6a769a82d939d87f41f397',
  date: 'Mon, 09 Mar 2015 10:21:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8f8808232e6a769a82d939d87f41f397',
  date: 'Mon, 09 Mar 2015 10:21:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/a8e5d81fed097b14802b77a560d41dc8')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8e5d81f-ed09-7b14-802b-77a560d41dc8</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5328f685c92c7c2a93b5ffdfbc977bad',
  date: 'Mon, 09 Mar 2015 10:21:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/a8e5d81fed097b14802b77a560d41dc8')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>a8e5d81f-ed09-7b14-802b-77a560d41dc8</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5328f685c92c7c2a93b5ffdfbc977bad',
  date: 'Mon, 09 Mar 2015 10:21:06 GMT',
  connection: 'close' });
 return result; }]];