import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getSmurfs} from '../actions/actions'

const Smurfs = props => {

    useEffect(() => {
        props.getSmurfs()
    }, [])

    return(
        <>
            <div>
                <h1>Here's your village!</h1>
            </div>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <h1>Name: {smurf.name}</h1>
                    <h2>Age: {smurf.age}</h2>
                    <h2>Height: {smurf.height}</h2>
                </div>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getSmurfs})(Smurfs)