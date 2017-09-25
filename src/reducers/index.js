const apreducer = (state, action) => {
    console.log("ACTION: ", action.type);    
    switch (action.type) {
        case "CONNECT": {
            console.log("connect state: ", state);
            state = {
                ...state
            }
            break;
        }
            
        case "REGISTER": {
            state = {
                ...state
            }
            break;   
        }
            
        case "CONNECTED": {
            state = {
                ...state,
                wsState    :   action.type
            }
            break;
        }
            
        case "REGISTERED": {
            state = {
                ...state,
                regState    :   action.type
            }
            break;                            
        }   
        
        case "TOGGLE_DIALPAD": {
            state = {
                ...state,
                dialpad   :   !state.dialpad
            }
            break;
        }
    
        case "DIAL": {
            state = {
                ...state,
                incall   :   !state.incall,
                dialpad  :   !state.dialpad
            }
            break;
        }

        case "HANGUP": {
            state = {
                ...state,
                incall   :   !state.incall
            }
            break;
        }

        default:
            break;
    };
    return state;
};

export default apreducer;