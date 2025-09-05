async function fetchNewData(cate, loge, center) {
  // The fetch() API returns a Promise. This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  const item =  await fetch('https://api.mapbox.com/search/searchbox/v1/category/'+ cate +
        '?access_token=pk.eyJ1Ijoia3ZhbnV5IiwiYSI6ImNtZGt6a3JrMDB5a2cya3E3Y2UyNjNlMzIifQ.eKLmC5NnBZhCdk8CfeyXmg&language=en&'+
        'limit=20'+
        //'&bbox=-74.21%2C40.52%2C-73.68%2C40.87' //&proximity=-74.0242%2C40.6941'
        '&proximity='+center[0]+ '%2C'+ center[1]
        ).then((response) => {

    const j = response.json();


  
    // maybe do something with j

    
    return j;
  })
  //.then((content) => {
  //  return content.features
  //});
  const coords = []
  loge.forEach((x,i) =>
    {
      coords.push([truncate(x.longitude), truncate(x.latitude)])
     // console.log([truncate(x.longitude), truncate(x.latitude)])
    })
  console.log(coords)


  //console.log(item.features)
  item.features.forEach((x,i)=> {
    console.log([truncate(x.geometry.coordinates[0]), truncate(x.geometry.coordinates[1])])

    
    coords.forEach((j,k)=> {
      if(  JSON.stringify(j) == JSON.stringify([truncate(x.geometry.coordinates[0]), truncate(x.geometry.coordinates[1])])){
        item.features.splice(i,1)
      }
      
      })

    
  
  })
  console.log(item.features)
  return item
  //.then().then()
}

export default fetchNewData

function truncate (num) {
  return Math.trunc(num * Math.pow(10, 4)) / Math.pow(10, 4);
}
