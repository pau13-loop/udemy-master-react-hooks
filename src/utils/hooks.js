import { useEffect, useState } from "react";

export const useFecth = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setResult(json));
    }, []);

    return result;
}