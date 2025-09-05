async function fetchLayerData() {
  // The fetch() API returns a Promise. This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  const item =  await fetch('https://api.mapbox.com/search/searchbox/v1/category/coffee?'+
        'access_token=pk.eyJ1Ijoia3ZhbnV5IiwiYSI6ImNtZGt6a3JrMDB5a2cya3E3Y2UyNjNlMzIifQ.eKLmC5NnBZhCdk8CfeyXmg&language=en&'+
        'limit=5&proximity=-74.0242%2C40.6941').then((response) => {
    
    const j = response.json();
    // maybe do something with j

    
    return j;
  })
  //.then((content) => {
  //  return content.features
  //});

  return item
  //.then().then()
}





export default fetchLayerData