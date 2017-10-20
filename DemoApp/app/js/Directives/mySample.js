'use strict'
eventsApp.directive('mySample', function($compile) {
    return {
        restrict: 'C', //'A' is for attribute, 'E' is for element, 'C' is for class, 'M' for comment
        template: "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>",
        scope: {} //isolate. Will allow multiple element to act independently
        // link: function(scope, element, attrs, controller) {
        //     var markup = "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>";
        //     angular.element(element).html($compile(markup)(scope));
        // }
    }

});