import { SET_AUTHENTICATED } from "./type";
interface AuthType {
    name: Text;
    isLoggedIn: boolean;
}
const initialState = {
    isLogin: false,
    name: ""
}
const authReducer = (state = initialState, action: AuthType) => {
    switch (action.isLoggedIn) {
        case true:
            return{
                ...state, isAuthenticated: action.isLoggedIn, name:action.name
            }
        default:
            return false;

    }
}

export default authReducer;