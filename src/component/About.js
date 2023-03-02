import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { decrementCount, incrementCount } from '../store/action/Count';

function About() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { increment } = useSelector(state => state.countReducer)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (increment) {
            setCount(increment)
        } else {
            setCount(0)
        }
    }, [increment])

    const increptData = () => {
        dispatch(incrementCount(count))
    }
    const decrementData = () => {
        dispatch(decrementCount(count))
    }
    return (
        <div>
            <h1>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
            </h1>

            <div>
                {increment}
            </div>

            <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                <Button variant="primary" onClick={increptData}>+</Button>
                <Button variant="primary" onClick={decrementData}>-</Button>
            </div>
        </div>
    )
}

export default About