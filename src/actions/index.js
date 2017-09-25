import sip from "../lib/sip";

export const apConnect = (props, config) => {
    console.log("Connection Action");
    return (dispatch) => {
        return dispatch({
            type    :   "CONNECT",
            payload :   sip.doConnect(props, config)   
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

export const apDial = (uri, options) => {
    console.log("Dial Action");
    return (dispatch) => {
        return dispatch({
            type    :   "DIAL",
            payload :   sip.doCall(uri, options)
        });
    };
};

export const apHangup = () => {
    console.log("Hangup Action");
    return (dispatch) => {
        return dispatch({
            type    :   "HANGUP",
            payload :   sip.endCall()
        });
    };
};

export const apRegStatus = (status) => {
    console.log("Registration Status");
    return (dispatch) => {
        return dispatch ({
            type    :   status
        });
    };
};

export const toggleDialpad = () => {
    return (dispatch) => {
        return dispatch({
            type    :   "TOGGLE_DIALPAD"   
        });
    };
};