import React, {useState} from "react";
import { connect } from "react-redux";
import {postSmurf} from '../actions/actions'


const Form = props => {
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age:'',
        height:''
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
            <button type='submit' onClick={() => props.postSmurf(newSmurf)}>Add Your Smurf!</button>
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
export default connect(mapStateToProps, {postSmurf})(Form)