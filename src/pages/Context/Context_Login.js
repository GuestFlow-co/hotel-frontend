import React, { useEffect, useReducer} from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { initialState, ReducerLogin } from '../../store/reducers/ReducerLogin';
import axios from 'axios';

export const LoginContext = React.createContext();

function LoginProvider(props) {
    const [loginData, dispatch] = useReducer(ReducerLogin, initialState)

    function able(capability) {
        return loginData.user.capabilities?.includes(capability);
     }

    async function login(username, password) {
        console.log('...RUNNING')
        let { logged, token, user } = loginData;
        let response = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, {}, {// for login
            headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` }
        })
        console.log("user: ",response.data.user)
        console.log("token:",response.data.token)
        let auth = response.data
        console.log("token:",auth.token)
        console.log("password:",auth.user.password)
        console.log("username:",auth.user.username)

        if (auth ) {
            try {
                validateToken(auth.token);
            } catch (err) {
                setLoginState(logged, token, user, err);
                console.error(err);
            }
        }
    }

    function logout() {
        setLoginState(false, null, {});
    };
    
    function validateToken(token) {
        try {
            let validUser = jwt_decode(token);
            console.log(validUser)
            setLoginState(true, token, validUser);
            console.log('login-State', loginData.logged)
        }
        catch (e) {
            setLoginState(false, null, {}, e);
            console.log('Token Validation Err', e);
        }

    };

    function setLoginState(logged, token, user, err) {
        cookie.save('auth', token);
        cookie.save('user', user);
        dispatch({ type: 'CHANGE_STATUS_OF_LOGIN', payload: logged })
        dispatch({ type: 'CHANGE_THE_TOKEN', payload: token })
        dispatch({ type: 'CHANGE_THE_USER', payload: user })
        dispatch({ type: 'CHANGE_THE_ERR', payload: err })
    };

    function componentDidMount() {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const token = qs.get('token') || cookieToken || null;
        validateToken(token);
    }
    useEffect(() => {
        componentDidMount()
    }, [])

    return (
        <LoginContext.Provider value={{ able, login, logout, loginData, dispatch }}>
            {props.children}
        </LoginContext.Provider>
    );

}

export default LoginProvider;