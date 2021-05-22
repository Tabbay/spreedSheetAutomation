export const handleValidation = (fields, errors) => {
     //Name
     if(!fields["firstName"]){
        errors["firstName"] = "Cannot be empty";
        return false
     }

     if(typeof fields["firstName"] !== "undefined"){
        if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
           errors["firstName"] = "Only letters";
           return false
        }        
     }
}