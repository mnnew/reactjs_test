import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Linax_command() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>
                Hello how are you
            </h1>
            <Button variant="primary" className='m-5' onClick={() => navigate('/')}>
                Home
            </Button>
            <Button variant="primary" className='m-5' onClick={() => navigate('/about')}>
                about
            </Button>
        </div>
    )
}

export default Linax_command