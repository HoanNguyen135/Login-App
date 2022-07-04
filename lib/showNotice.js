import { showMessage } from "react-native-flash-message";

const showNotice = (message,type,description) =>{
    showMessage({
        message: message,
        type: type,
        description: description
      });
}

export default showNotice;