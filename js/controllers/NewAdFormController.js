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
        const tagsAd = this.element.querySelector('[name="tagsForm"]'); 
        const descriptionAd = this.element.querySelector('[name="descriptionForm"]'); 
        nombreAds.addEventListener('keyup', () => {
             // si el input es OK lo marco en verde, si no, en rojo
            if (nombreAds.validity.valid) {
                nombreAds.classList.add("is-success");
                nombreAds.classList.remove("is-danger");
            } else {
                nombreAds.classList.remove("is-success");
                nombreAds.classList.add("is-danger");
            }
            const button = this.element.querySelector('[name="saveAd"]');
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });
        tagsAd.addEventListener('click',()=>{
            if (tagsAd.validity.valid) {
                tagsAd.classList.add("is-success");
                tagsAd.classList.remove("is-danger");
            } else {
                tagsAd.classList.remove("is-success");
                tagsAd.classList.add("is-danger");
            }
            const button = this.element.querySelector('[name="saveAd"]');
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });
        descriptionAd.addEventListener('keyup', () => {
            // si el input es OK lo marco en verde, si no, en rojo
           if (descriptionAd.validity.valid) {
                descriptionAd.classList.add("is-success");
                descriptionAd.classList.remove("is-danger");
           } else {
                descriptionAd.classList.remove("is-success");
                descriptionAd.classList.add("is-danger");
           }

        const button = this.element.querySelector('[name="saveAd"]');
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });
        
        const exitButton = this.element.querySelector('[name="backForm"]');
        exitButton.addEventListener('click',event =>{
            event.preventDefault();
            window.location.href = '/'
        })

        // controlamos cuando se envía el formulario
        this.element.addEventListener('submit', async event => {
            event.preventDefault();  // cancelamos el envío del formulario (comportamiento por defecto)
            
            let idUser
            try {
                idUser = await dataService.getUser();
            } catch (error) {
                this.publish(this.events.ERROR, error)
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
                //Después de guardar el anuncio, enviaremos al usuario a la página principal de anuncios
                window.location.href = '/'
                
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





