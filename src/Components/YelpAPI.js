var yelp = require('yelp-fusion')

const apiKey = 'vB8qIJGECWsLTvlab2-gJFMh4F_937xw1Zw_v25Nk249XgQibCbXukN80Z2KedHFwok8v5NmkOLQPethw-aJlX5Z9Ja0msTuVFlR_EeDFcW6cElXUgXfYj9UxxWpW3Yx'

const client = yelp.client(apiKey)

export const get = () =>
  client.business('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.name);
}).catch(e => {
  console.log(e);
});

 // export const get = (bookId) =>
 //   fetch(`${api}/books/${bookId}`, { headers })
 //     .then(res => res.json())
 //     .then(data => data.book)
