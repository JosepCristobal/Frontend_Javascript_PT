const BASE_URL = 'http://127.0.0.1:8000';
const TOKEN_KEY = 'token';




export default {

    getPopAd: async function() {
        const url = `${BASE_URL}/api/popAds?_expand=user`;
        //const url = `${BASE_URL}/api/messages?_expand=user&_sort=id&_order=desc`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data.map(popAd => {
                const user = popAd.userId || {};
                
                return {
                    nombre: popAd.nombre.replace(/(<([^>]+)>)/gi, ""),
                    venta: popAd.venta || false,
                    precio: popAd.precio || 0,
                    username: user.username || 'Desconocido',
                    foto: popAd.image || null,
                    tags: popAd.tags || []
                }
            }); // <--- esto realmente es un resolve(data)
        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
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