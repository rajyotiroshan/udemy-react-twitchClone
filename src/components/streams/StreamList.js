import React from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions/index';
import {Link} from 'react-router-dom';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    
    /**
     * render list with (administrative authority) delete and edit button on the list
     */
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    {/*url based navigation wildcard selection*/ }
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative" >Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream=>{
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)} 
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                    
                </div>
            )
        })
    }

    /**
     * render a create button with user signed in only.
     */
    renderCreateButton(){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            );
        
    }

    render(){
        //console.log(this.props.streams);
        return (<div>
            <h2>Streams</h2>
            <div className="ui celled list ">{this.renderList()}</div>
            {this.renderCreateButton()}
        </div>)
    }
}

const mapStateToProps = (state,/* ownProps*/) => {
    return {
        streams: Object.values(state.streams), 
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

//connect StreamList component to redux store passing fetchStream action creator.
export default connect(mapStateToProps, {fetchStreams})(StreamList);