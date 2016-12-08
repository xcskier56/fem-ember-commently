export function initialize(application) {
    // application.deferReadiness()
    // const geo = navigator.geolocation;
    // geo.getCurrentPosition((pos) => {
    //     let pt = pos.coords;
    //     let loc = { lat: Math.round(pt.latitude), lng: Math.round(pt.longitude) };
    //     application.register('data:location', loc, { instantiate: false });

    //     application.advanceReadiness();
    // })

    let loc = { lat: 43, lng: -93 };
    application.register('data:location', loc, { instantiate: false });
}

export default {
  name: 'geo-location',
  initialize: initialize
};