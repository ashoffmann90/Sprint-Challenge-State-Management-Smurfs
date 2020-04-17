const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS":
            return{
                ...state,
                isFetching: true
            }
        case "FETCHING_SUCCESS":
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case "FETCHING_FAIL":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case "POST_SUCCESS":
            const newSmurf = {
              name: '',
              age: '',
              height: '',
            };
            return {
              ...state,
              smurfs: [...state.smurfs, newSmurf],
              isFetching: false,
              error: ""
            };
        case "POST_FAIL":
          return {
            ...state,
            isAdding: false,
            error: action.payload,
            isFetching: false
          };

        default:
            return state
    }
}

export default reducer