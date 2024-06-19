import React, { useEffect } from 'react';
import { useAuth } from './AuthContext.jsx';
import { Navigate, Link } from 'react-router-dom';

import './styles.css'; // Import your external CSS file
import { addScrollEffect } from './scroll'; // Import JavaScript logic

import mount2 from './assets/mount2.png';
import mount1 from './assets/mount1.png';
import bush2 from './assets/bush2.png';
import bush1 from './assets/bush1.png';
import leaf2 from './assets/leaf2.png';
import leaf1 from './assets/leaf1.png';

function Home() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    } else {
        useEffect(() => {
            // Call the scroll effect function from the imported file
            const cleanupScrollEffect = addScrollEffect();

            return () => {
                // Clean up the scroll effect when component unmounts
                cleanupScrollEffect();
            };
        }, []);

        return (
            <>
                <div>
                    <header>
                        <h1>&#x1F306;</h1>
                        <nav>
                            <Link to="/">Log Out</Link>
                        </nav>
                    </header>

                    <section className="home">
                        <img src={mount2} className="mount2" alt="mount2" />
                        <img src={mount1} className="mount1" alt="mount1" />
                        <img src={bush2} className="bush2" alt="bush2" />

                        <h1 className="title">Welcome</h1>

                        <img src={bush1} className="bush1" alt="bush1" />
                        <img src={leaf2} className="leaf2" alt="leaf2" />
                        <img src={leaf1} className="leaf1" alt="leaf1" />
                    </section>

                    <section className="about">
                        <h1>Poem</h1>
                        <br />
                        <p>As a Adult, we journey with no rest</p>
                        <p>With destination set, we must accept
                        </p>
                        <p>Through ups and downs, we must compete
                        </p>
                        <p>And learn the lessons that end will teach
                        </p>
                        <br />

                        <p></p>

                        <p>Our parents, guides through childhood days
                        </p>
                        <p>Now watch us grow and go for different ways
                        </p>
                        <p>Their love and care, forgotten in our hearts
                        </p>
                        <p>As we set fast to make our own fresh starts
                        </p>
                        <p></p>
                        <br />


                        <p>As child, we raced in sports and play
                        </p>
                        <p>In school rooms, we learned day by day
                        </p>
                        <p>But now we face the fails of adulthood
                        </p>
                        <p>Where life is Harsh and misunderstood too
                        </p>
                        <p></p>
                        <br />


                        <p>Yet in the last, we must face feared death
                        </p>
                        <p>And draw our final, lasting breath
                        </p>
                        <p>But what remains, as a legacy when we leave
                        </p>
                        <p>nothing and nothing,to dear and to grief
                        </p>
                        <p>nothing and nothing , to dear and to grief.</p>

                        <p className='author'>- Harsh Ranjan</p>
                        


                    </section>
                    <footer>
                <p className='foot'>Made with &#x1F49F; By Harsh Ranjan</p>
               

                </footer>
                    
                </div>
              

                
            </>
        );
    }
}

export default Home;
