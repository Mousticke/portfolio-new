import { useLeaflet } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'

const Legend = ({ placeType }) => {
  const { map } = useLeaflet()

  useEffect(() => {
    const legend = L.control({ position: 'bottomleft' })

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend')
      const labels = []

      Object.keys(placeType).forEach((key) => {
        labels.push(
          `<div style="display:flex">
            <div style="background:${placeType[key].hex}; width:1em; height:1em;"></div>
            <span style="padding-left:1em;font-weight: 600;">${placeType[key].name}</span>
          </div>`
        )
      })

      div.innerHTML = labels.join('')
      return div
    }
    legend.addTo(map)
  }, [placeType, map])
  return null
}

export default Legend
