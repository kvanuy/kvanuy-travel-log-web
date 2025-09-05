const API_URL = 'http://localhost:1337';

export async function listLogEntries(logEntries, setLogEntries) {
  const url = 'http://localhost:1337/api/logs';
  try {
    const response = await fetch(url, {method: 'GET'});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log('list log', json)
    setLogEntries(json)
    return json
  } catch (error) {
    console.error(error.message);
  }
}


export async function createLogEntry(entry, logEntries, setLogEntries){
  const url = 'http://localhost:1337/api/logs'
  const response = await fetch(url, {method:'POST', 
    headers: {'content-type' : 'application/json',},
    body: entry,
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');}
      console.log(response)
      listLogEntries(logEntries, setLogEntries)
      



})
}


export async function deleteLogEntry(entry,logEntries, setLogEntries){
  const url = 'http://localhost:1337/api/logs'
  const response = await fetch(url, {method:'DELETE', 
    headers: {'content-type' : 'application/json',},
    body: entry,
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Resource deleted successfully');
    const jjs = response.json()
    console.log(jjs)
    listLogEntries(logEntries, setLogEntries)
  })
  .catch(error => {
    console.error('There was a problem with the DELETE request:', error.message);
  })
}


/*function listLogEntries(){
    const response = fetch('${API_URL}/api/logs');
    console.log(response.then((response) => response.json()))
    return response.json();
} */