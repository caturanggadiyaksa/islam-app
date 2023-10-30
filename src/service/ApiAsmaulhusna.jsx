import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiConfig from '../config/ApiConfig';



const ApiAsmaulhusna = () => {

    const [data, setData] = useState(null);


    useEffect(() => {
        const apiKey = ApiConfig();
        axios.get('http://127.0.0.1:8000/api/asmaulhusna', {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
            .then(response => {
                setData(response.data);
                localStorage.setItem('asmaulhusnaData', JSON.stringify(response.data));
                // console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

};

export default ApiAsmaulhusna;