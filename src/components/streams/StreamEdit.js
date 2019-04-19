import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream, editStream} from  '../../actions/index'
import StreamForm from './StreamForm';
class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    //callback used by StreamForm on edit form Submit buttton
    onSubmit = (formValues)=>{
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render(){
        //console.log(this.props);
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
        <div>
            <h3>Edit Stream</h3>
            <StreamForm 
                onSubmit = {this.onSubmit}
                initialValues={_.pick(this.props.stream,'title', 'description')}/* use exact name as this is used by redux-form to pass to compoenent as initial values.*/ />
        </div> )       
    }

}

//access redux store.
const mapStateToProps = (state, ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);