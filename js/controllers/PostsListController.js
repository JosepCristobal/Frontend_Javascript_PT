import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { popView } from '../views.js';

export default class PostsListController extends BaseController {

    render(popAds) {
        for (const popAd of popAds) {
            const article = document.createElement('article');
            article.innerHTML = popView(popAd);
            this.element.appendChild(article);
        }
    }

    async loadPosts() {
        this.publish(this.events.START_LOADING, {});
        try {
            const popAds = await dataService.getPopAd();
            this.render(popAds);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            // esto se ejecuta siempre, vaya bien o vaya mal
            this.publish(this.events.FINISH_LOADING, {});
        }
    }

}
