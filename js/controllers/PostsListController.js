import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { popView } from '../views.js';
import ExitButtonController from './ExitButtonController.js';

export default class PostsListController extends BaseController {

    render(popAds) {
        for (const popAd of popAds) {
            const article = document.createElement('article');
            article.innerHTML = popView(popAd);
            this.element.appendChild(article);       
        }
        this.myEventListener();
    }

    async loadPosts() {
        this.publish(this.events.START_LOADING, {});
        const exitButton = document.querySelector('.exit-button');
        new ExitButtonController(exitButton);
           
        try {
            const popAd = await dataService.getPopAd();
            this.render(popAd);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            // esto se ejecuta siempre, vaya bien o vaya mal
            this.publish(this.events.FINISH_LOADING, {});
        }
    }

    myEventListener(){
        //Con el doble click obtendremos el name de la imagen que corresponde al id: del anuncio
       this.element.querySelectorAll(".imgWidth").forEach(imgW =>{
        const newImage = imgW
        newImage.addEventListener("dblclick", function(event){
            event.preventDefault(); 
            //Si todo ha ido bien, redireccionaremos a la página de detalle pasando el id en la query
            window.location.href = `/detailPopAd.html?id=${this.name}`; 
        });
        
       });
        
    }

}
