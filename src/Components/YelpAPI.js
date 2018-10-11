const api = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/"

const apiKey = 'vB8qIJGECWsLTvlab2-gJFMh4F_937xw1Zw_v25Nk249XgQibCbXukN80Z2KedHFwok8v5NmkOLQPethw-aJlX5Z9Ja0msTuVFlR_EeDFcW6cElXUgXfYj9UxxWpW3Yx'

const headers = {
  'Accept': 'application/json',
  'Authorization': `Bearer ${apiKey}`
}

 export const get = (yelpID) =>
   fetch(`${api}${yelpID}`, { headers })
     .then(res => res.json())
     .then(data => data.rating)
     .catch(err => err)
