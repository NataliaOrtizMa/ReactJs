import {useState, useEffect} from 'react';

export default function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) {
            return;
        }
        setLoading(true);

        fetch(uri)
            // .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri]);

    return {data, error, loading};
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return [
        {value, onChange: event => setValue(event.target.value)},
        () => setValue(initialValue)
    ];
};