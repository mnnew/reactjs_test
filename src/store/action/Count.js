import axios from "axios"
import { api } from "../../api"
import { DECREPTED, INCREPTED } from "../actionType"

export const incrementCount = (data) => {
    return (dispatch) => {
        const newData = +data + 1
        return dispatch({ type: INCREPTED, payload: newData })
    }
}

export const decrementCount = (data) => {
    return (dispatch) => {
        const newData = data == 0 ? data : +data - 1
        return dispatch({ type: DECREPTED, payload: newData })
    }
}

export const getCount = (data) => {
    return (dispatch) => {
        try {
            const res = api('/getuser', "get", null)
            if (res.data.status === "success") {
                return dispatch({ type: DECREPTED, payload: res.data.data })
            }
        } catch (error) {
            
        }
    }
}