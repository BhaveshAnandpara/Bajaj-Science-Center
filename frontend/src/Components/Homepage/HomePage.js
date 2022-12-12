import React from 'react'
import HomeCSS from './Homepage.module.css'

export default function HomePage() {
    
    return (
        <>
            <div className={HomeCSS.main}>
                <div className={HomeCSS.container1}>
                    <div className={HomeCSS.text}>
                        <h3>What is Bajaj Science Education Center?</h3>
                        <p>Bajaj Science Education Centre is a place for children to learn science through exploration and play. Our goal is to spark curiosity in their minds and to inculcate a sense of excitement in studying science. We strive to nurture creativity and innovation.
                        </p>
                    </div>
                    <div className={HomeCSS.image}>
                        <img src="images/vector.png" alt="Image" />
                    </div>
                </div>
                <div className={HomeCSS.container2}>
                    <h3>Why is the Bajaj Science Education Center Important?</h3>
                    <p>The Bajaj Science Education Centre encourages children to discover and explore science through hands-on experimentation, which is largely missing in school curriculam. It does this through laboratory sessions held in five laboratories, each dedicated to a different branch of science.</p>
                </div>
                <div className={HomeCSS.carousel}></div>
                <div className={HomeCSS.container3}>
                    <h3>How does Bajaj Science Education Center Impact Learning to students?</h3>
                    <p>Students are admitted to Bajaj Science Education Centre through entrance exams held at the 5th and 7th standard levels. The Centre facilitates about 500 students in carrying out concept-oriented experiments and demonstrations, which stimulate their curiosity and introduces them to the method of science.</p>
                </div>
                <div className={HomeCSS.testimonial}>
                    <h2>Our Students on Bajaj Science Education Center</h2>
                    <div className={HomeCSS.testimonial1} id="testimonial1">
                        <img src="images/user1.png" id="img1" width="10%" alt=""/>
                            <h3 id="h31">Wade Warren</h3>
                            <p id="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.</p>
                    </div>
                    <div className={HomeCSS.testimonia2} id="testimonial2">
                        <img src="images/user2.png" id="img2" width="10%" alt=""/>
                            <h3 id="h32">Jenny Wilson</h3>
                            <p id="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.</p>
                    </div>
                </div>
            </div>
            
        </>
        
    )
    

}
