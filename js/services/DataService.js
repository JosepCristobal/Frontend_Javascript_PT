const BASE_URL = 'http://127.0.0.1:8000';
const TOKEN_KEY = 'token';




export default {

    getPopAd: async function(idAd=null) {
        let url;
        const currentUser = await this.getUser();
        if (idAd===null){
            url = `${BASE_URL}/api/popAds?_expand=user&_sort=id&_order=asc`;
        }else{
             url = `${BASE_URL}/api/popAds/${idAd}?_expand=user`;
        }
        
        //const url = `${BASE_URL}/api/messages?_expand=user&_sort=id&_order=asc`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const dataElement = Array.isArray(data);
            if (dataElement){
                return data.map(popAd => {
                    let type;
                    if (popAd.venta===true){
                        type= "Venta"
                    } else{
                        type="Se busca"
                    }
                    return {
                        id: popAd.id,
                        nombre: popAd.nombre.replace(/(<([^>]+)>)/gi, ""),
                        venta: type || "Se busca",
                        precio: popAd.precio || 0,
                        userName: popAd.user.username || 'Desconocido',
                        foto: popAd.foto || null,
                        tags: popAd.tags || [] 
                    }
                });
            }else{
                let type;
                    if (data.venta===true){
                        type= "Venta"
                    } else{
                        type="Se busca"
                    }
                    return {
                        id: data.id,
                        nombre: data.nombre.replace(/(<([^>]+)>)/gi, ""),
                        venta: type || "Se busca",
                        precio: data.precio || 0,
                        userName: data.user.username || 'Desconocido',
                        foto: data.foto || null,
                        tags: data.tags || [] ,
                        detail: data.description.replace(/(<([^>]+)>)/gi, "") || "Sin descripción",
                        canBeDeleted: currentUser ? currentUser.userId === data.userId : false
                    }

        }; // <--- esto realmente es un resolve(data)
        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
    },
    
    registerUser: async function(user) {
        const url = `${BASE_URL}/auth/register`;
        return await this.post(url, user);
    },

    login: async function(user) {
        const url = `${BASE_URL}/auth/login`;
        return await this.post(url, user);
    },

    saveToken: async function(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    getToken: async function() {
        return localStorage.getItem(TOKEN_KEY);
    },

    isUserLogged: async function() {
        const token = await this.getToken();
        return token !== null;  // esto devuelve true o false
    },
    //Añadimos el post, delete y put porque hemos creado un método request que recoge los tres
    post: async function(url, postData, json=true) {
        return await this.request('POST', url, postData, json);
    },

    delete: async function(url) {
        return await this.request('DELETE', url, {});
    },

    put: async function(url, putData, json=true) {
        return await this.request('PUT', url, putData, json);
    },
    // post: async function(url, postData, json=true) {
    //     const config = {
    //         method: 'POST',
    //         headers: {},
    //         body: null
    //     };
    //     if (json) {
    //         config.headers['Content-Type'] = 'application/json';
    //         config.body = JSON.stringify(postData);  // convierte el objeto de usuarios en un JSON
    //     } else {
    //         config.body = postData;
    //     }
    //     const token = await this.getToken();
    //     if (token) {
    //         config.headers['Authorization'] = `Bearer ${token}`;
    //     }
    //     const response = await fetch(url, config);
    //     const data = await response.json();  // respuesta del servidor sea OK o sea ERROR.
    //     if (response.ok) {
    //         return data;
    //     } else {            
    //         // TODO: mejorar gestión de errores
    //         // TODO: si la respuesta es un 401 no autorizado, debemos borrar el token (si es que lo tenemos);
    //         throw new Error(data.message || JSON.stringify(data));
    //     }
    // },
    request: async function(method, url, postData, json=true) {
        const config = {
            method: method,
            headers: {},
            body: null
        };
        if (json) {
            config.headers['Content-Type'] = 'application/json';
            config.body = JSON.stringify(postData);  // convierte el objeto de usuarios en un JSON
        } else {
            config.body = postData;
        }
        const token = await this.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(url, config);
        const data = await response.json();  // respuesta del servidor sea OK o sea ERROR.
        if (response.ok) {
            return data;
        } else {            
            // TODO: mejorar gestión de errores
            // TODO: si la respuesta es un 401 no autorizado, debemos borrar el token (si es que lo tenemos);
            throw new Error(data.message || JSON.stringify(data));
        }
    },
    getUser: async function() {
        try {
            const token = await this.getToken();
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) {
                return null;
            }
            const payload = tokenParts[1]; // cogemos el payload, codificado en base64
            const jsonStr = atob(payload); // descodificamos el base64
            const { userId, username } = JSON.parse(jsonStr); // parseamos el JSON del token descodificado
            return { userId, username };
        } catch (error) {
            return null;
        }
    },

    deleteAd: async function(tweet) {
        const url = `${BASE_URL}/api/popAds/${tweet.id}`;
        return await this.delete(url);
    }

}



//Ejemplo de objeto popADs
// {
//     "userId": 1,
//     "tags": [
//       "motor",
//       "lifestyle"
//     ],
//     "nombre": "Kawasaky",
//     "venta": true,
//     "precio": 4500.56,
//     "foto": "kawa.jpg"
//   }