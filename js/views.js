export const popView = (popAd) => {
    let imgHTML = '';
    if(popAd.foto){
      imgHTML=` <div class="card-image">
      
      <figure class="image is-fullheight">
        <img  src="${popAd.foto}" alt="Placeholder image" >
      </figure>
      </div>`
    }
    
    //<time datetime="${popAd.date}">${popAd.date}</time>
    return `<div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${popAd.nombre}</p>
          </div>
        </div>
        <div class="content">
          ${popAd.precio} 
          
        </div>
        <div ${popAd.tags} Proves</div>
        <p class="subtitle">
        ${popAd.tags}
        </p>
        <div>${popAd.venta}</div>
        <div>${popAd.userName}</div>
      </div>
     ${imgHTML}
    </div>`;
  };
  
  
  export const errorView = (errorMessage) => {
    return `<article class="message is-danger">
      <div class="message-header">
        <p>Error</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        ${errorMessage}
      </div>
    </article>`
  }
  