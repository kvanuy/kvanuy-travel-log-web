import { useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl'
import { listLogEntries, createLogEntry, deleteLogEntry } from './API';


const Marker = ({ map, feature, logstate, logset}) => {
    const { geometry } = feature

    const markerRef = useRef()
    
    function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])).toDateString();
}



    useEffect(()=>{
      const divElement = document.createElement('div');
      const titleElement = document.createElement('h2')
      titleElement.innerText = feature.title
      const comElement = document.createElement('h3')
      comElement.innerText =  feature.comment
      const image = document.createElement('img');
      image.setAttribute('src', feature.image);
      //const rankElement = document.createElement('p')
      //comElement.innerText = logEntries[key].rank
      const dateElement = document.createElement('h3')
      dateElement.innerText = parseISOString(feature.visitDate)

      divElement.append(titleElement, dateElement, comElement, image)


      const assignBtn = document.createElement('div');
      assignBtn.innerHTML = `<button class="btn btn-success btn-simple text-white" > Delete</button>`;
      //divElement.innerHTML = innerHtmlContent;
      divElement.appendChild(assignBtn);
      // btn.className = 'btn';
      assignBtn.addEventListener('click', (e,logEntries, setLogEntries) => {
        const deleteCond =  {"latitude": feature.latitude , "longitude":  feature.longitude }
        console.log(popup)

        console.log(deleteCond)
        deleteLogEntry(JSON.stringify(deleteCond),logstate, logset)
        popup.remove()})


        const popup = new mapboxgl.Popup({ 
            closeButton: false,
            closeonClick: false
             })
          //.setText(logEntries[key].title)
          .setDOMContent(divElement)


        markerRef.current = new mapboxgl.Marker()
            .setLngLat([feature.longitude, feature.latitude])
            .setPopup(popup)
            .addTo(map)
        
  markerRef.current.getElement().addEventListener('click', (e) => {
    console.log(e);
    e.clickOnLayer = true
  });

        return () => {
            markerRef.current.remove()
        }
    }, [])

    return null

}

export default Marker
