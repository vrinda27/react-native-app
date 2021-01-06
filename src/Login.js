import React from 'react';
import {Text} from 'react-native';
const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text"
                    autoFocusrequire
                    value={email}
                    onchange={(e) => setEmail(e.target.value)}
                />
                <Text className="errorMsg"> {emailError}</Text>
                <label>Password</label>
                <input type="password"
                    required
                    value={password}
                    onchange={(e) => setPassword(e.target.value)}
                />
                <Text className="errorMsg"> {passwordError} </Text>
            </div>
        </section>

    );
};
export default Login;