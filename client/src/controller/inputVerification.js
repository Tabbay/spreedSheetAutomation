export const handleValidation = (fields, errors) => {
  //Name
  if (!fields["name"]) {
    errors["name"] = "Cannot be empty";
    return false;
  }

  if (typeof fields["name"] !== "undefined") {
    if (!fields["name"].match(/^[a-zA-Z]+$/)) {
      errors["name"] = "Only letters";
      return false;
    }
  }
};
