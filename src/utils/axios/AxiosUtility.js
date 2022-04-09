import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

export default class AxiosUtility {

    static async get(endpoint, customHeaders) {
        const axiosConfig = {
            headers: {
                ...customHeaders
             }
        };

        try {
            const request = await axios.get(endpoint, axiosConfig);
            if (request) {
                return request;
            }
        }
        catch (err) {
            return err;
        }
    }

}
