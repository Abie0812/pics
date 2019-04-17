import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID 7466d9ab8fe894d6f00f1c0bc383f8c0e74bba20efa67eeb59b590f5d45e724d"
    }
});