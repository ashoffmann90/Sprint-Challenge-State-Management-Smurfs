import axios from "axios";

export const getSmurfs = () => dispatch => {
    dispatch({ type: "FETCHING_SMURFS" })
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        // console.log(response)
        dispatch({ type: "FETCHING_SUCCESS", payload:response.data })
    })
    .catch(error => {
        console.log('oops', error)
        dispatch({type: "FETCHING_FAIL", paylod: error.response})
    })
}

export const postSmurf = newSmurf => dispatch => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
        console.log('new smurf', response)
        dispatch({type: "POST_SUCCESS", payload: response.data})
    })
    .catch(error => {
        dispatch({ type: "POST_FAIL", payload: error.response})
    })
}