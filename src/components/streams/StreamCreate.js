import React from 'react';
import { Field, reduxForm} from 'redux-form';
 class StreamCreate extends React.Component{

    renderInput({input, label}) {
        //console.log(formProps)
        //m-1
/*         return <input onChange={formProps.input.onChange}
                      value = {formProps.input.value} />; */
        //m-2
        return (
                <div className="field">
                    <label>{label}</label> 
                    <input {...input}/> 
                </div>
                )
    }

     render(){
         //reduxForm passess an object with different properties as a props to this component.
         //console.log(this.props)
         return(
             <form className="ui form">
                 <Field name="title" component={this.renderInput} label="Enter Title"/>
                 <Field name="description" component={this.renderInput} label="Enter Description"/>
             </form>
         );
     }
  
}

//hook up StreamCreate to reduxForm.
export default reduxForm({
    form: 'streamCreate', //name of the form anything.
})(StreamCreate);