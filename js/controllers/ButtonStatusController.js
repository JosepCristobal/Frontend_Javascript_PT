import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class ButtonStatusController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
    }

    async checkIfUserIsLogged() {
        const usesIsLogged = await dataService.isUserLogged();
        if (usesIsLogged) {
            //Si el usuario está logueado, habilitaremos los botones de nuevo anuncio y salir
            const newAdButton = this.element.querySelector('.new-ad-button');
            newAdButton.classList.remove('is-hidden');

            const newExitButton = this.element.querySelector('.exit-button');
            newExitButton.classList.remove('is-hidden');

            const newLoginButton = this.element.querySelector('.login-button');
            newLoginButton.classList.add('is-hidden');

            const newRegisterButton = this.element.querySelector('.register-button');
            newRegisterButton.classList.add('is-hidden');

        } else {
            //Por el contrario, si no está logueado, abilitaremos los botones login y register, deshabilitando nuevo anuncio y salir
            const newAdButton = this.element.querySelector('.new-ad-button');
            newAdButton.classList.add('is-hidden');

            const newExitButton = this.element.querySelector('.exit-button');
            newExitButton.classList.add('is-hidden');

            const newLoginButton = this.element.querySelector('.login-button');
            newLoginButton.classList.remove('is-hidden');

            const newRegisterButton = this.element.querySelector('.register-button');
            newRegisterButton.classList.remove('is-hidden');
        }
    }

}
