'use strict'
eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        replace: true, //replaces the element <event-thumbnail> with vaild html tag
        scope: {
            // event: "=event" //have to add the event object from the tag. This scope doesn't inherit from the parent. Can use just "=" if event="event"" ( instead of event=myevent, etc)
            upvote: "&", //because it is a method
            downvote: "&",
            count: "="
        }
    }
});