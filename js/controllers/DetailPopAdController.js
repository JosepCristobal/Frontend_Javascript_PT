import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { detailPopView } from '../views.js';
import DeleteButtonController from './DeleteButtonController.js';

export default class DetailPopAdController extends BaseController {

    render(popAd) { 
            const article = document.createElement('article');
            article.innerHTML = detailPopView(popAd);
            const deleteButton = article.querySelector('[name="btnDelete"]');
            //Cargamos el controlador de borrado de anuncio si el usuario tiene el botón de borrado
            if (deleteButton) {
                new DeleteButtonController(deleteButton, popAd);
            }
            this.element.appendChild(article);

        this.myEventListener();
    }

    async loadPost() {
        this.publish(this.events.START_LOADING, {});
        const locationValue =  window.location;
        const idAd = this.paramValue(locationValue);
        //En el supuesto de que el anuncio no exista, redirigiremos al usuario a la página principal
        if (idAd==="-1"){
            this.publish(this.events.FINISH_LOADING, {});
            alert("Este anuncio no existe!! \nno le podemos mostrar el detalle \nSerá redirigido a la página principal")
            window.location.href = `/`
        }
        try {
            const popAds = await dataService.getPopAd(idAd);
            this.render(popAds);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            // esto se ejecuta siempre, vaya bien o vaya mal
            this.publish(this.events.FINISH_LOADING, {});
        }
    }

    myEventListener(){
        //Añadimos el listener del click del botón back
       const backButton = this.element.querySelector('[name="back"]')
        backButton.addEventListener("click", function(event){
            event.preventDefault(); 
            //Redireccionaremos de la página de detalle a la página principal
            window.location.href = '/'
        });
       };

    paramValue(locationValue){
        const searchParams = new URLSearchParams(locationValue.search.substring(1));
        const searchResult= searchParams.get("id")
        if (searchResult){
            return searchResult
        }else{
            return "-1"
        }
        
    }

}