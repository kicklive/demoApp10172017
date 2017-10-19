'use strict';
eventsApp.controller('EventController', function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {
    $scope.sortOrder = 'name';
    // eventData.getEvent(function(event) {
    //         $scope.event = event;
    //     })
    //     // .success(function(event) {
    //     //     $scope.event = event;
    //     // })
    //     .error(function(data, status, headers, config) {
    //         $log.warn(data, status, headers, config);

    //     });

    // $scope.event=eventData.getEvent($routeParams.eventId);
    $scope.event = $route.current.locals.event; //beacuse we are using resolve in app.js


    // eventData.getEvent($routeParams.eventId)
    //     .$promise.then(
    //         function(event) {
    //             $scope.event = event;
    //             console.log(event);
    //         },
    //         function(response) {
    //             console.log(response);
    //         }
    //     )
    //     .catch(function(response) { console.log(response) });

    console.log($route.current.foo);
    console.log($route.current.params.foo);

    $scope.snippet = '<span style="color:green">hey</span>';
    $scope.BtnDisabled = true;
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };
    $scope.scrollToSession = function() {
        $anchorScroll();
    }
    $scope.reload = function() {
        $route.reload();
    }

});