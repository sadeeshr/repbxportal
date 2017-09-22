import sip from "../lib/sip";

export const apConnect = (config) => {
    console.log("Connection Action");
    return (dispatch) => {
        return dispatch({
            type    :   "CONNECT",
            payload :   sip.doConnect(dispatch, config)   
        });
    };
};

export const apRegister = () => {
    console.log("Register Action");
    return (dispatch) => {
        return dispatch({
            type    :   "REGISTER",
            payload :   sip.doRegister()
        });
    };
};