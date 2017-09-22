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
            
        case "Connected": {
            state = {
                ...state,
                wsState    :   action.type
            }
            break;
        }
            
        case "Registered": {
            state = {
                ...state,
                regState    :   action.type
            }
            break;                            
        }            
    
        default:
            break;
    };
    return state;
};

export default apreducer;