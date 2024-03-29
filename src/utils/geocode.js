const request = require('request')
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxleDQ4MTUiLCJhIjoiY2tka3QxYmQwMDFiOTJ5bWd6bm93d2JoMCJ9.CqzczkxZoO6hGWI8OxFz8A&limit=1'
    
    request({url, json:true}, (error,{ body })=>{
       if (error){
          callback('Unable to connect to geolocation !', undefined)
       }else if (body.features.length === 0){
          callback('Unable to find location. Please try again', undefined)
       }else {
          callback(undefined, {
             latitude:body.features[0].center[1],
             logtitude:body.features[0].center[0],
             location:body.features[0].place_name
          })
       }
    })
 }
 module.exports = geocode
