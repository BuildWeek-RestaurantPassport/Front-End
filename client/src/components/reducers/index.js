import {
 LOGIN_START,
 LOGIN_SUCCESS,
 LOGIN_ERROR,
 REGISTER_START,
 REGISTER_SUCCESS,
 REGISTER_ERROR
} from '../actions';

const initialState = {
  token: null,
  loginStart: false,
  loginError: false,
  registerStart: false,
  registerError: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
            ...state,
            loginStart: true
        };

      case LOGIN_SUCCESS: 
        return {
          ...state,
          loginStart: false,
          token: action.payload
       };
       
      case LOGIN_ERROR: 
         return {
         ...state,
         loginStart: false,
         loginError: true
       };

       case REGISTER_START:
           return {
               ...state,
               registerStart: true
           };
        
        case REGISTER_SUCCESS: 
          return {
              ...state,
              registerstart: false,
              token: action.payload.token 
          };
        
        case REGISTER_ERROR:
          return {
              ...state,
              registerStart: false,
              registerError: action.payload
          }
          
     default:
         return state;
    }
};

export default reducer;