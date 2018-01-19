/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import { MainController } from './main/main.controller';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {EventService} from "./components/eventData/event.service";

angular.module('clinet', ['ngRoute', 'ui.bootstrap', 'toastr', 'mwl.calendar'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('EventService', EventService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective);
