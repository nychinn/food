import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cdkqPrc2Ri2hrLCV8deVUK9lhwdfLM51iqfLv5aBQspSIECBj22324NVo23MM5ZNjkVEGNbprs_TvHng4XRGrkgoSD0Shqw9cciWA9ujtin8x0ERAEcIJ-xwhjidXXYx'
    }
});

// yelp.get('/search');