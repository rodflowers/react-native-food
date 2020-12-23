import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer cUtnk8rDdnw7nOGkHhx0bqg-ZaJqQIeKoBWigtM-w5BNNa1h5EbCPd8EUwQ_fdKqy1TdCotNkiL0eFSrqsJvkP1ja23z9SlFxDhMPReu2HbAmPWP53ih-oxAKwfJX3Yx'
    }
});