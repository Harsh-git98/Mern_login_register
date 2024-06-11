import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext.jsx';

import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
            .then(result => {
                
                if (result.data === "Success") {
                    login(true); // set authenticated state

                    navigate('/home');
                }
                else{
                    alert(result.data);
                }
            })
            .catch(err => {
                console.log(err);
                alert("An error occurred1111. Please try again.");
            });
            
    };

    return (
        <div style={styles.container}>
            <div style={styles.signupForm}>
                <h2 className="text-center mb-4" style={styles.h2}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <label style={styles.label}>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" style={styles.input} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label style={styles.label}>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" style={styles.input} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4" style={styles.button}>Login</button>
                </form>

                <label style={styles.labels}>Don't have an account?</label>
                <Link to="/register" className="btn" style={styles.buttons}>Signup</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        fontFamily: "'Roboto', sans-serif",
    },
    signupForm: {
        width: '100%',
        maxWidth: '400px',
        padding: '30px',
        margin: 'auto',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    label: {
        fontWeight: 'bold',
        color: '#6e2efb',
    },
    input: {
        borderRadius: '5px',
        borderColor: 'black',
    },
    button: {
        backgroundColor: '#6e8efb',
        borderColor: '#6e8efb',
    },
    h2: {
        color: 'blue',
    },
    buttons: {
        color: 'green',
        padding: '5px',
        margin: '0px 0px 3px 50px',
        border: '1px solid green',
    },
    labels: {
        color: 'blue',
        margin: '15px 0px 0px 0px',
        padding: '10px',
    }
};

export default Login;
