import React, { useState }from 'react';

const Form = ({handleFirstName, handleEmail}) => {
    const [errors, setErrors] = useState({});
    const [mFirstName, setFirstNamem] = useState('');
    const [mEmail, setEmailm] = useState('');
    const handleValidation = () => {
        let err = {};
        let formIsValid = true;
        //Name
        if(!mFirstName){
            formIsValid = false;
            err["firstName"] = "Cannot be empty";
            setErrors({err});
        }
   
        if(typeof mFirstName !== "undefined"){
           if(!mFirstName.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            err["firstName"] = "Only Letters";
            setErrors({err});
           }        
        }
        return formIsValid 
   }

    const contactSubmit = (e) => {
        e.preventDefault();
        let formIsValid = handleValidation();
        if(!formIsValid){
            alert("Form has errors.")
        }else{
            handleEmail(mEmail);
            handleFirstName(mFirstName);
            alert("Form submitted");
            setFirstNamem("");    
            setEmailm("");   
        }

    }
    return (
        <div>
           <form id = 'ticket' onSubmit={(e) => contactSubmit(e)} >
                <label style = {{display:"flex", flexDirection: "column"  }}>
                <h1> Form Submission: </h1>
                <input type="text" value={mFirstName} onChange={(e) => setFirstNamem(e.target.value)} />
                <span style={{color: "red"}}> {errors? errors['firstName']: ""}</span>
                <input type="email" value={mEmail} onChange={(e) => setEmailm(e.target.value)} />
                <span style={{color: "red"}}> {errors? errors['email']: ""}</span>
                </label>
                <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default Form;