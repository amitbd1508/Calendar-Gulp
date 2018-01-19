import {EventService} from "../components/eventData/event.service";

export class MainController {


  constructor($scope, EventService) {
    'ngInject';
    this.$scope = $scope;
    this.calendarTitle = 'Hello World';
    this.EventService = EventService;
    this.getEvents();
  }


  getEvents() {
    this.EventService
      .getEvents()
      .then(events => {
        this.$scope.events = events;
        this.$scope.abc = 'afaa';
      })
  }
}
