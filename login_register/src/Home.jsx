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
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam labore quos ut quisquam harum maxime rem nihil ullam repellendus dolor! Numquam repudiandae animi ipsa maxime libero autem, sequi laboriosam laborum, vero ullam nam itaque, quibusdam possimus sit necessitatibus sapiente suscipit eum dicta in mollitia est et dolorem nesciunt? Natus cumque aliquid sequi nam voluptates tempora, dignissimos provident deserunt vero tenetur rem iste totam ducimus maiores ab suscipit ipsam delectus? Ipsam dicta temporibus nesciunt et perferendis ad iste iusto amet maxime vitae, pariatur accusantium minima error eum sint, cum veritatis neque velit fugit modi unde tempora distinctio nobis. Dolores, fugiat impedit.
                </p>
            </div>
        );
    }
        
       


    
    
}

export default Home;