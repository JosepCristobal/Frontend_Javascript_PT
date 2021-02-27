export const popView = (popAd) => {
    let imgHTML = '';
    if(popAd.foto){
      imgHTML=` <div class="card-image ">
      <p class = "centerImg">
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
    let deleteButtonHTML = '';
    if (popAd.canBeDeleted) {
      deleteButtonHTML = '<button name="btnDelete" class="button is-danger">Borrar</button>';
    }
    const retButtonHTML = '<button name="back" class="button is-success">Retroceder</button>'

    let imgHTML = '';
    if(popAd.foto){
      imgHTML=` <div class="card-image ">
      <p class = "centerImg">
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
        <div ${popAd.tags} </div>
        <p class="subtitle">
          ${popAd.tags}
        </p>
        <div>${popAd.venta}</div>
        <div>${popAd.userName}</div>
      </div>
     ${imgHTML}
     <br><br>
    <p class="subtitle">
     <strong>Detalle</strong>
    </p>
     <div class="content">
      ${popAd.detail}
      <br>
      <time datetime="2021-2-28">11:50 PM - 28 Feb 2021</time>
    </div>
    <br>
    ${deleteButtonHTML}
    ${retButtonHTML}
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
  