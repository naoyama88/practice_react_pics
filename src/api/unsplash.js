import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID aede8af7144d1189dc4ab4910562345be7a319af96a4bf38f7c854e159982dec'
    }
});
