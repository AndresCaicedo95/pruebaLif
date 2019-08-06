class Validator {

    validateInputs(inputData) {
  
      let errorMsg = "";
  
      if(!inputData.name) {
  
        errorMsg +="Please enter name of this item.\n"
  
      }
  
      if(!inputData.username) {
  
        errorMsg +="Please enter username of this item.\n"
  
      }
  
      if(inputData.id.toString().match(/[^0-9]/g)) {
  
        errorMsg +="Id must be a number.\n"
  
      }
  
      if(errorMsg.length == 0){
  
        return true;
  
      } else {
  
        alert(errorMsg);
  
        return false;
  
      }
  
    }
  
  }
  
  export default Validator;