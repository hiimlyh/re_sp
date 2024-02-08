import React, { useEffect, useState } from 'react';
import axios from 'axios';

//test
function Axios() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.get('/test')
            .then(res => {
                setResponse(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // useEffect를 한 번만 실행하려면 빈 배열을 전달합니다.

    return (
        <div>
            {response && <p>{response}</p>}
        </div>
    );
}

export default Axios;
