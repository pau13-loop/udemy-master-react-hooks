import { useEffect, useState } from 'react';
import PICTURES from './data/pictures';

function Gallery() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setIndex(storeIndex => {
                    return ((storeIndex + 1) % PICTURES.length);
                });
        }, 3000);
    }, [])

    return (
        <div className='Gallery'>
            <img
                src={PICTURES[index].image}
                alt='gallery'
            />
        </div>
    );
}

export default Gallery;