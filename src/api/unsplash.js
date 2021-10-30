import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 81xYp5iPLznTU5NzJx-EqnVplKm512nBI6A1IHScr4k'
    }
});