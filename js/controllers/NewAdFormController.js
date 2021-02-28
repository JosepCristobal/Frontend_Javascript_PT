import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class NewAdFormController extends BaseController {

    constructor(element) {
        super(element);
        this.publish(this.events.START_LOADING, {});
        this.checkIfUserIsLogged();
        this.attachEventListeners();
        this.focusInTextarea();
        this.publish(this.events.FINISH_LOADING, {});
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html?next=/new-ad.html';
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

    focusInTextarea() {
        const nombreAd = this.element.querySelector('[name="nombreForm"]');
        nombreAd.focus();
    }

    attachEventListeners() {
        // a medida que el usuario escribe, comprobamos si el formulario es válido para habiltiar o no el botón de enviar
        const nombreAds = this.element.querySelector('[name="nombreForm"]');
        nombreAds.addEventListener('keyup', () => {
             // si el input es OK lo marco en verde, si no, en rojo
            if (nombreAds.validity.valid) {
                nombreAds.classList.add("is-success");
                nombreAds.classList.remove("is-danger");
            } else {
                nombreAds.classList.remove("is-success");
                nombreAds.classList.add("is-danger");
            }
         //TODO tratar de la misma forma el campo textarea y el multiselector   


            const button = this.element.querySelector('[name="saveAd"]');
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });

        // controlamos cuando se envía el formulario
        this.element.addEventListener('submit', async event => {
            event.preventDefault();  // cancelamos el envío del formulario (comportamiento por defecto)
            //TODO getUser id
            let idUser
            try {
                idUser = await dataService.getUser();
                //window.location.href = '/?mensaje=tweetOK'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                //this.publish(this.events.FINISH_LOADING)
            }
            //TODO Get next AD

            //TODO quedará por verificar todos los valores de los campos 
            const ad = {
                nombre: this.element.elements.nombreForm.value,
                venta: this.element.elements.ventaForm.value,
                precio: this.element.elements.precioForm.value, //TODO Transformar a numérico
                userId: idUser.userId || 0,
                tags: getSelectValues(this.element.elements.tagsForm),
                description:this.element.elements.descriptionForm.value,
                foto: ""
            }
            
            if (this.element.elements.file.files.length > 0) {
                ad.foto = this.element.elements.file.files[0];
            }
            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveAd(ad);
                window.location.href = '/?ad=AdOK'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        });
    }
}

function getSelectValues(select) {
    const result = [];
    const options = select && select.options;
    let opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }





