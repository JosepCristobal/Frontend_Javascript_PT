export const popView = (popAd) => {
    let imgHTML = '';
    
    if(popAd.foto){
      imgHTML=`  
      <div class="card-image ">
      <p class = "centerImg">
        <img class= "imgWidth" name= "${popAd.id}" src="${popAd.foto}" alt="Tags disponibles" />`
    } else{
      imgHTML=` <div class="card-image ">
      <p class = "centerImg">
      <img class= "imgWidth" name= "${popAd.id}"  src="http://localhost:8000/pexels-flickr-157039.jpg" alt="Imagen no disponible" />
      </p>`
    }

    const cabecera = `<div class="container is-widescreen">
                        <div class="notification is-primary ">
                         <strong class="is-size-5 is-pulled-center"> ${popAd.nombre}</strong>
                        </div>
                      </div>`
    //TODO
    //<time datetime="${popAd.date}">${popAd.date}</time>
    return `<div class="card">
    ${cabecera}
      <div class="card-content">
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Precio del artículo</p>
        <div class="content">
          ${popAd.precio}  
        </div>
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Clasificación del artículo</p>
        <div ${popAd.tags}</div>
        <p class="subtitle">
        ${popAd.tags}
        </p>
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Tipo de anuncio</p>
        <div>${popAd.venta}</div>
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Vendedor/Comprador</p>
        <div>${popAd.userName}</div>
      </div>
      <br>
     ${imgHTML}
    </div>`;
  };

  export const detailPopView = (popAd) => {
    let deleteButtonHTML = '';
    if (popAd.canBeDeleted) {
      deleteButtonHTML = '<button name="btnDelete" class="button is-danger">Borrar</button>';
    }
    const retButtonHTML = '<button name="back" class="button is-success">Retroceder</button>';

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

    const cabecera = `<div class="container is-widescreen">
                        <div class="notification is-primary ">
                         <strong class="is-size-5 is-pulled-center"> ${popAd.nombre}</strong>
                        </div>
                      </div>`
    //TODO
    //<time datetime="${popAd.date}">${popAd.date}</time>
    return `
    <div class="card">
    ${cabecera}
      <div class="card-content">
      
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Precio del artículo</p>
        <div class="is-size-5">
          ${popAd.precio} 
        </div>
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Clasificación del artículo</p>
        <div ${popAd.tags} </div>
        <p class="is-size-5">
          ${popAd.tags}
        </p>
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Tipo de anuncio</p>
        <div class="is-size-5">${popAd.venta}</div>
        <p class="is-size-5 has-background-primary-light has-text-primary-dark">Vendedor/Comprador</p>
        <div><p class="is-size-5" >${popAd.userName}</p></div>
      </div>
      <br>
     ${imgHTML}
     <br><br>
    <p class="is-size-4 has-background-primary-light has-text-primary-dark">Detalle</p>
     
    </p>
     <div class="content is-size-5">
      ${popAd.detail}
      <br>
      <time datetime="2021-2-28">11:50 PM - 28 Feb 2021</time>
    </div>
    <br>
    ${retButtonHTML}
    ${deleteButtonHTML}
    
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
  