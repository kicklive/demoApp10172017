// eventsApp.factory('eventData', function($http, $log) {
//     return {
//         getEvent: function(successcb) {
//             $http({ method: 'GET', url: '/data/event/1' }).
//             success(function(data, status, headers, config) {
//                 successcb(data);
//             }).error(function(data, status, headers, config) {
//                 $log.warn(data, status, headers(), config);

//             });
//             return $http({ method: 'GET', url: '/data/event/1' });

//         }
//     }
// });
eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', { id: '@id' });
    return {
        getEvent: function() {
            return resource.get({ id: 1 })
        },
        save: function(event) {
            event.id = 998;
            return resource.save(event);
        },
        getAllEvents: function() {
            return resource.query();
        }
    }
});