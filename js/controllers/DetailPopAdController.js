import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { detailPopView } from '../views.js';

export default class DetailPopAdController extends BaseController {

    render(popAd) { 
            const article = document.createElement('article');
            article.innerHTML = detailPopView(popAd);
            this.element.appendChild(article);

        //this.myEventListener();
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

    // myEventListener(){
    //     //Con el doble click obtendremos el name de la imagen que corresponde al id: del anuncio
    //    this.element.querySelectorAll(".imgWidth").forEach(imgW =>{
    //     const newImage = imgW
    //     newImage.addEventListener("dblclick", function(event){
    //         event.preventDefault(); 
    //         //Si todo ha ido bien, redireccionaremos a la página de detalle pasando el id en la query
    //         alert(`Has pulsado en imagen con id: ${this.name}`);
    //     },false);
    //    });
        
    // }
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