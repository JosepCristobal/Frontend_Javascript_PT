import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class ExitButtonController extends BaseController {

    constructor(element) {
        super(element);
        this.element.addEventListener('click', async ev => {
            const deleteConfirmed = confirm('¿Seguro que quieres cerrar la sesión?');
            if (deleteConfirmed) {
                try {
                    await dataService.deleteToken();
                    window.location.reload();
                } catch (error) {
                    this.publish(this.events.ERROR, error);
                }
                
            }
        });
    }

}

