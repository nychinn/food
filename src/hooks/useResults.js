import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // anything that is put in the params will be added on the end of the request
    const searchApi = async (searchTerm) => {
        console.log('hi there');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }    
    }

    // ** BAD CODE
    // call searchApi when component is first rendered
    // causes this to run continuously!
    // searchApi('pasta');

    // run one time
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};