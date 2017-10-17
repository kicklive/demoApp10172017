'use strict';
eventsApp.controller('EventController', function EventController($scope, eventData, $anchorScroll) {
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

    eventData.getEvent()
        .$promise.then(
            function(event) {
                $scope.event = event;
                console.log(event);
            },
            function(response) {
                console.log(response);
            }
        )
        .catch(function(response) { console.log(response) });

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

});