import React from 'react'
import { useAuth } from './AuthContext.jsx';
import { Navigate } from 'react-router-dom';



function Home()
{
    const {isAuthenticated} =useAuth();
    
   

        if(!isAuthenticated){
            return( <Navigate to="/login"/>);
        }
        else{
        return (
            <div>
                <hr/>
                <h1>
                    welcome to Home Page
                </h1>
                <hr/>
            </div>
        );
    }
        
       


    
    
}

export default Home;