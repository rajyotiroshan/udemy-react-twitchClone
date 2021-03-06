import {SIGN_IN, SIGN_OUT, FETCH_STREAM,FETCH_STREAMS, CREATE_STREAM,DELETE_STREAM, EDIT_STREAM} from './ActionTypes'
import streams from '../apis/stream';
import history from '../history';

export const signIn = (userId)=> {
    return{
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = ()=>{
    return {
        type: SIGN_OUT
    };
};

//handle stream creation.

export const createStream = formValues => async (dispatch, getState)=>{
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type: CREATE_STREAM, payload: response.data})
    //programmatic navigation
    //navigate to show list page.
    history.push('/');
};

//handle fetching streams

export const fetchStreams = ()=> async dispatch => {//return middleware function to thunk
    //fetch for all streams data from jason-servere.
    const response = await streams.get('/streams');
    //dispatch functino to reducers to update the redux store.
    dispatch({type: FETCH_STREAMS, payload: response.data/*All streams data*/});
}

//handle fetching single stream with given id.

export const fetchStream = (id)=>async dispatch=>{
    //fetch stream of id
  const response = await streams.get(`/streams/${id}`);  
    //dispatch action to reducers.
    dispatch({type: FETCH_STREAM, payload: response.data});
};

//handle editing a stream

export const editStream = (id, formValues)=>async dispatch=>{
    //update the stream with given id with passed formValues.
    const response = await streams.patch(`/streams/${id}`, formValues);
    //dispatch the action with updated data
    dispatch({type: EDIT_STREAM, payload: response.data});
    history.push('/');
}

//delete the stream of given id and then update the redux store with deleted id.
export const deleteStream = (id)=> async dispatch=>{
    await streams.delete(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
    //navigate back to list 
    history.push('/')
}