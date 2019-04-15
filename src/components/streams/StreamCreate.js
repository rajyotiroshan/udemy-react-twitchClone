import React from 'react';
import { Field, reduxForm} from 'redux-form';
 class StreamCreate extends React.Component{

    renderError({error, touched}){
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    //defining std renderInput function will create a 'this' keyword context related error 
    renderInput = ({input, label, meta})=> {
        //console.log(formProps)
        //m-1
/*         return <input onChange={formProps.input.onChange}
                      value = {formProps.input.value} />; */
        //m-2
        //meta field contains the error object.
        //console.log(meta);
        const className=`field ${meta.error && meta.touched ? 'error':''}`
        return (
                <div className={className}>
                    <label>{label}</label> 
                    <input {...input} autoComplete="off"/> 
                    {this.renderError(meta)}
                </div>
                )
    }

    //handle form submit.
    onSubmit(/*not called with event instead get called with existed value inside Field.*/ formValues) {
       // event.preventDefault();//do not need to call ,called by redux-form handleSubmit 
        console.log(formValues);
    }

     render(){
         //reduxForm passess an object with different properties as a props to this component.
        // console.log(this.props)
         return(
             <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                 <Field name="title" component={this.renderInput} label="Enter Title"/>
                 <Field name="description" component={this.renderInput} label="Enter Description"/>
                 <button className="ui button primary">Submit</button>
             </form>
         );
     }
  
}

//validate function to be wired up to redux form.
//such that kboes to use the validate function.
//get called initially or user interacts with it anyway.
const validate = (formValues)=>{
    const errors={};
    if(!formValues.title) {
        //user did not enter any title.
        //errors name has an identical name as Field name property.
        errors.title="title can not be left empty"
    }

    if(!formValues.description) {
        errors.description = "description field ca not be left empty.";
    }

    return errors;//returning an object re-render the Component.
    //each field renderes with erroer msg from the errors object.
}


//hook up StreamCreate to reduxForm.
export default reduxForm({
    form: 'streamCreate', //name of the form anything.
    validate
})(StreamCreate);