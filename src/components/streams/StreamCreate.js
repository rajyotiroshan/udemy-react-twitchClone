import React from 'react';
import {connect} from 'react-redux';
import {createStream,} from '../../actions';
import StreamForm from './StreamForm';
/**
 * create form for new stream creation.
 */
 class StreamCreate extends React.Component{

    //handle form submit.
    onSubmit = (/*not called with event instead get called with existed value inside Field.*/ formValues) => {
       // event.preventDefault();//do not need to call ,called by redux-form handleSubmit 
        //console.log(formValues);
        //call for createStream action creator.
        this.props.createStream(formValues);
    }

     render(){
         //reduxForm passess an object with different properties as a props to this component.
        // console.log(this.props)
         return(
            <div>
                <h3>Create astream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
         );
     }
  
}


export default connect(null, {createStream})(StreamCreate);