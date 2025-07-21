let map
let marker
let geocoder

const address = document.getElementById('delivery-ubicacion-form').address

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -12.0464, lng: -77.0428 },
    zoom: 11
  })

  geocoder = new google.maps.Geocoder()

  map.addListener('click', e => {
    const latLng = e.latLng

    if (marker) {
      marker.setPosition(latLng)
    } else {
      marker = new google.maps.Marker({
        position: latLng,
        map
      })
    }

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK' && results[0]) {
        address.value = results[0].formatted_address
      } else {
        address.value = 'No se pudo obtener la dirección'
      }
    })

    address.classList.remove('invalid')
  })
}

document.getElementById('delivery-ubicacion-form').currentLocation.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latLng = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }

        map.setCenter(latLng)

        if (marker) {
          marker.setPosition(latLng)
        } else {
          marker = new google.maps.Marker({
            position: latLng,
            map,
            title: "Tu ubicación",
          })
        }
        geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === 'OK' && results[0]) {
            document.getElementById('delivery-ubicacion-form').address.value = results[0].formatted_address
          } else {
            document.getElementById('delivery-ubicacion-form').address.value = 'No se pudo obtener la dirección'
          }
        })
      },
      (err) => {
        document.getElementById('delivery-ubicacion-form').address.value =
          "Error al obtener ubicación"
      }
    )
  }

  address.classList.remove('invalid')

})
