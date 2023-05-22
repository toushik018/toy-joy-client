import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect( () => {
        document.title = `ToyJoy | ${title}`
    }, [title])
};

export default useTitle;