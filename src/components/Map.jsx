import React, { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Map as LeafletMap, TileLayer, Popup, Marker } from 'react-leaflet'
import { divIcon } from 'leaflet'
import ReactCountryFlag from 'react-country-flag'
import mapData from '@config/mapData'
import 'leaflet/dist/leaflet.css'
import { FaMapMarker } from 'react-icons/fa'
import styled from 'styled-components'
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

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;

  .leaflet-container {
    height: 100%;
  }

  .leaflet-div-icon {
    background: transparent;
    border: none;
  }

  .leaflet-bottom {
    padding: 1em;
    background: white;
  }
`

const PopupInfoContainer = styled.div`
  width: 250px;
`

const PopupTitle = styled.div`
  display: flex;
  align-items: center;
`

const PopupCountryName = styled.h5`
  padding: 0.2em;
`

const PopupMarkerType = styled.span`
  font-weight: 600;
  font-size: 1.2em;
`
const PopupDescription = styled.p`
  font-weight: 600;
`

const Map = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)

  const iconMarkup = (color) => renderToStaticMarkup(<FaMapMarker style={{ color }} size={30} />)
  const customMarkerIcon = (color) =>
    divIcon({
      html: iconMarkup(color),
    })

  const showMarkerInfo = (latLng) => {
    setMapZoom(12)
    setMapCenter({ ...mapCenter, lat: latLng[0], lng: latLng[1] })
  }

  const showDataOnMap = () => {
    return (
      mapData &&
      mapData.map((countries) =>
        countries.places.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={customMarkerIcon(placeType[place.type].hex)}
            onClick={() => showMarkerInfo([place.lat, place.lng])}
          >
            <Popup>
              <PopupInfoContainer>
                <PopupTitle>
                  <ReactCountryFlag
                    className='emojiFlag'
                    countryCode={countries.country.code}
                    style={{
                      fontSize: '2em',
                      lineHeight: '1em',
                    }}
                    aria-label={countries.country.name}
                    svg
                  />
                  <PopupCountryName>{`${countries.country.name}  -  ${place.city}`}</PopupCountryName>
                </PopupTitle>
                <PopupMarkerType>{placeType[place.type].name}</PopupMarkerType>
                <PopupDescription>{place.description}</PopupDescription>
              </PopupInfoContainer>
            </Popup>
          </Marker>
        ))
      )
    )
  }

  return (
    <MapContainer>
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          noWrap
        />
        {/* Loop through countries and set markers on the screen */}
        {showDataOnMap()}
        <Legend placeType={placeType} />
      </LeafletMap>
    </MapContainer>
  )
}

export default Map
