import React, { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Map as LeafletMap, TileLayer, Popup, Marker } from 'react-leaflet'
import { divIcon } from 'leaflet'
import ReactCountryFlag from 'react-country-flag'
import mapData from '@config/mapData'
import 'leaflet/dist/leaflet.css'
import { FaMapPin } from 'react-icons/fa'
import Legend from './Legend'

const placeType = {
  birth_place: {
    hex: '#ff0000', // shade of red
    name: 'Birth place',
  },
  school_life: {
    hex: '#ff9933', // shade of orange
    name: 'School',
  },
  previousWork_place: {
    hex: '#001a4d', // shade of blue
    name: 'Previous Professional Experience',
  },

  currentWork_place: {
    hex: '#1a8cff', // shade of blue
    name: 'Current Professional Experience',
  },

  previousHome_place: {
    hex: '#660066', // shade of purple
    name: 'Previous Place',
  },

  current_home: {
    hex: '#9900ff', // purple
    name: 'Current place',
  },

  holidays: {
    hex: '#009933', // shade of cyan
    name: 'Holidays',
  },
}

function Map() {
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)

  const iconMarkup = (color) => renderToStaticMarkup(<FaMapPin style={{ color }} size={30} />)
  const customMarkerIcon = (color) =>
    divIcon({
      html: iconMarkup(color),
    })

  const showMarkerInfo = (lat, lng) => {
    setMapCenter([lat, lng])
    setMapZoom(12)
  }

  const showDataOnMap = () => {
    return mapData.map((countries) =>
      countries.places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng]}
          icon={customMarkerIcon(placeType[place.type].hex)}
          onClick={() => showMarkerInfo(place.lat, place.lng)}
        >
          <Popup>
            <div className='info-container'>
              <div>
                <ReactCountryFlag
                  className='emojiFlag'
                  countryCode={countries.country.code}
                  style={{
                    fontSize: '1em',
                    lineHeight: '1em',
                  }}
                  aria-label={countries.country.name}
                  svg
                />
                <h5>{`${countries.country.name}  -  ${place.city}`}</h5>
              </div>
              <span>{placeType[place.type].name}</span>
              <p>{place.description}</p>
            </div>
          </Popup>
        </Marker>
      ))
    )
  }

  return (
    <div className='map'>
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Loop through countries and set markers on the screen */}
        {showDataOnMap()}
        <Legend placeType={placeType} />
      </LeafletMap>
    </div>
  )
}

export default Map
