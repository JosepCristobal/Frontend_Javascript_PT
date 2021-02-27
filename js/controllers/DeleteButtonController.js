import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class DeleteButtonController extends BaseController {
    
    constructor(element, tweet) {
        super(element);
        this.element.addEventListener('click', async ev => {
            const deleteConfirmed = confirm('¿Seguro que quieres borrarlo?');
            if (deleteConfirmed) {
                await dataService.deleteTweet(tweet);
                this.publish(this.events.TWEET_DELETED, tweet);
            }
        })
    }

}
