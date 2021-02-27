import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class NewAdFormController extends BaseController {

    constructor(element) {
        super(element);
        this.publish(this.events.START_LOADING, {});
        // this.checkIfUserIsLogged();
        // this.attachEventListeners();
        // this.focusInTextarea();
        this.publish(this.events.FINISH_LOADING, {});
    }
    
}