import React, {useState} from "react";
import { connect } from "react-redux";
import axios from 'axios'
// import {postSmurf} from '../actions/actions'


const Form = props => {
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age:'',
        height:'',
        id: Date.now()
    })

    const handleChange = e => {
        e.preventDefault()
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault()
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            console.log('new smurf', response)
            // dispatch({type: "POST_SUCCESS"})
        })
        .catch(error => {
            console.log('oops', error)
            // dispatch({ type: "POST_FAIL", payload: error.response})
        })
    }

    return(
        <>
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: 
                <input
                    name='name'
                    type='text'
                    onChange={handleChange}
                    value={newSmurf.name}
                />
            </label><br/>
            <label htmlFor='age'>Age: 
                <input
                    name='age'
                    type='text'
                    onChange={handleChange}
                    value={newSmurf.age}
                />
            </label><br/>
            <label htmlFor='height'>Height: 
                <input
                    name='height'
                    type='text'
                    onChange={handleChange}
                    value={newSmurf.height}
                />
            </label><br/>
            <button type='submit'>Add Your Smurf!</button>
        </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        isAdding: state.isAdding,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(Form)