export const popView = (popAd) => {
    let imgHTML = '';
    if(popAd.foto){
      imgHTML=` <div class="card-image ">
      <p class = "centerImg"> El id es  "${popAd.id}"
        <img class= "imgWidth" name= "${popAd.id}" src="${popAd.foto}" alt="Tags disponibles" />`
    } else{
      imgHTML=` <div class="card-image ">
      <p class = "centerImg">
      <img class= "imgWidth" name= "${popAd.id}"  src="http://localhost:8000/pexels-flickr-157039.jpg" alt="Imagen no disponible" />
      </p>`
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

  export const detailPopView = (popAd) => {
    let imgHTML = '';
    if(popAd.foto){
      imgHTML=` <div class="card-image ">
      <p class = "centerImg"> El id es  "${popAd.id}"
        <img class= "imgWidth" name= "${popAd.id}" src="${popAd.foto}" alt="Tags disponibles" />`
    } else{
      imgHTML=` <div class="card-image ">
      <p class = "centerImg">
      <img class= "imgWidth" name= "${popAd.id}"  src="http://localhost:8000/pexels-flickr-157039.jpg" alt="Imagen no disponible" />
      </p>`
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
  