export function initialize(application) {
    console.log('fastboot')
    if (typeof(FastBoot) === 'undefined') {
      console.log('not fastboot');
      application.deferReadiness();
      const geo = navigator.geolocation;
      geo.getCurrentPosition((pos) => {
          let pt = pos.coords;
          let loc = { lat: Math.round(pt.latitude), lng: Math.round(pt.longitude) };
          application.register('data:location', loc, { instantiate: false });

          application.advanceReadiness();
      });
    }
}

export default {
  name: 'geo-location',
  initialize: initialize
};