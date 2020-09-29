const startWarsUrl = 'https://swapi.dev/api/';

export default {
    starWarsGet: async(params) =>{
        const response = await fetch(`${startWarsUrl}${params}`);
        try {
            if(response.ok) {
                let jsonResponse = await response.json();
                return jsonResponse;
            } throw new Error('Failed request!');
        } catch(error) {
            console.log(error);
        }        
    },
    starWarsWhile: async(url) => {
        const response = await fetch(`${url}`);
        try {
            if(response.ok) {
                let jsonResponse = await response.json();
                return jsonResponse;
            } throw new Error('Failed request!');
        } catch(error) {
            console.log(error);
        }
    }
}