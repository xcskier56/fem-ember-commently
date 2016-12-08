// # Takes two parameters: container and app
// initialize = (container, app) ->
//   # app.register 'route', 'foo', 'service:foo'
//   app.inject 'adapter', 'DataRequestLog', 'service:data-request-log'

// DataRequestLogInitializer =
//   name: 'data-request-log-service'
//   after: 'event-bus-service',
//   initialize: initialize

// `export {initialize}`
// `export default DataRequestLogInitializer`

export function initialize(application) {
    application.deferReadiness()
    const geo = navigator.geolocation
    geo.getCurrentPosition((pos) => {
        let pt = pos.coords;
        let loc = { lat: Math.round(pt.latitude), lng: Math.round(pt.longitude) };
        application.register('data:location', loc, { instantiate: false });

        application.advanceReadiness();
    })
};

export default {
  name: 'geo-location',
  initialize: initialize
};