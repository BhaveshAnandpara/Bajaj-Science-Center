import React from 'react'
import './Homepage.css'
import heroImg from '../../Assets/Media/heroImg.svg'
import Cards from '../../Components/Cards/Cards'
import Slider from '../../Components/Slider/Slider'
import Testimonials from '../../Components/Testimonials/Testimonials'

export default function HomePage() {
    return (
        <>

            <section className="homeSec">

                <section className="heroSec">

                    <div className="heroContent">
                        <p className='title' > What is <b>Bajaj Science Education Center ? </b> </p>
                        <p >Bajaj Science Education Centre is a place for children to learn science through exploration and play.Our goal is to spark curiosity in their minds and to inculcate a sense of excitement in studying science. We strive to nurture creativity and innovation.</p>
                    </div>

                    <img id='heroSecImage'  src={heroImg} alt="heroImg" />

                </section>

                <Cards title='Why is the Bajaj Science Education Center Important ?' content='The Bajaj Science Education Centre encourages children to discover and explore science through hands-on experimentation, which is largely missing in school curriculam. It does this through laboratory sessions held in five laboratories, each dedicated to a different branch of science.' />

                <Slider/>

                <Cards title='How does Bajaj Science Education Center Impact Learning to students ?' content='Students are admitted to Bajaj Science Education Centre through entrance exams held at the 5th and 7th standard levels. The Centre facilitates about 500 students in carrying out concept-oriented experiments and demonstrations, which stimulate their curiosity and introduces them to the method of science. ' />

                <Testimonials/>

            </section>
        </>
    )
}
