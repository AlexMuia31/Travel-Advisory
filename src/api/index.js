import axios from 'axios';


const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary"




export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'd077aaa7bcmshfb8051bf3cf5ad0p17ee1ajsn71f82ab39461'
            }
        });

        return data;

    } catch (error) {
        console.log(error)
    }
}