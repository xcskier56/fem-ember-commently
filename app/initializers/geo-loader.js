export function initialize(application) {
    if (typeof(FastBoot) === 'undefined') {
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