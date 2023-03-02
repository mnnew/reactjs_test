import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Home() {
    const navigate = useNavigate()
    const { increment } = useSelector(state => state.countReducer)
    return (
        <div>
            <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h1>
            <div>
                {increment}
            </div>
            <Button variant="primary"  onClick={() => navigate('/about')}>
                About
            </Button>
            <Button variant="primary"  onClick={() => navigate('/Linax_command')}>
                Linax_command
            </Button>
        </div>
    )
}

export default Home