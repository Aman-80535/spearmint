import gsap from "gsap";
import React, { useEffect, useState } from 'react';


const Home = () => {

	useEffect(() => {
    gsap.set("#gifImg", { scaleX: -1 })
  })

  let animation; 

  function moveAtSpeed(element, xTarget, speed) {
    const currentX = gsap.getProperty(element, "x");
    const distance = Math.abs(xTarget - currentX);
    const duration = distance / speed;
    if (animation) {
      animation.kill();
    }
  
    animation = gsap.to(element, {
      x: xTarget,
      duration: duration,
      ease: "none",  // Linear movement for constant speed
    });
  }
  

	let handleBackgroundClick = (e) =>{
    const gifDiv = document.getElementById('gifImg')
    const speed = 200;

		const gifPost = gifDiv.getBoundingClientRect().right;
		var clickpost = e.clientX

		if (gifPost > clickpost) {
      gsap.set("#gifImg", { scaleX: 1 }); 
      moveAtSpeed("#gifImg", 0, speed);  
    } else{
      gsap.set("#gifImg", { scaleX: -1 }); 
      moveAtSpeed("#gifImg", 800, speed);  
    }

	}


	const divStyle = {width: '100%',
    height: '100vh', 
    backgroundImage: 'url(assets/bgint.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'} 
	return(
		<>
			<div  style={divStyle} onClick={handleBackgroundClick}>
				<div>
					<img id="gifImg" src="assets/wizaart-img.56787174.gif" alt="gifImg" style={{marginLeft: '38px',
    						marginTop: '20%',
    						width: '15rem',
							}} />
				</div>
			</div>
		</>
	)
}

export default Home;