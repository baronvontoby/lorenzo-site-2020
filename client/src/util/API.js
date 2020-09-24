const startWarsUrl = 'https://swapi.dev/api/';

export default {
    starWarsGet: async(params) =>{
        console.log(startWarsUrl);
        const response = await fetch(`${startWarsUrl}${params}`);
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