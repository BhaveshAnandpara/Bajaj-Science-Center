import react from 'react';
import AboutCSS from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <>
            <div className={AboutCSS.ct_box1}>
                <div className={AboutCSS.ct_boxHead}>
                    <span>About Bajaj Science Education Center</span>
                </div>
                <p>Bajaj Science Education Centre was established in 2007, with Shri Rahul Bajaj as its president. Mr. C.K Desai served as its founder Director till 2015 and laid the foundations of its 'learning-by-doing' philosophy. <br />
                    The Centre is spread over an area of 3000 m2. <br /><br />

                    It has six laboratories (Physics, Chemistry, Mathematics, Biology, Electronics and Computers, Astronomy). Each laboratory is equipped for carrying out the prescribed experiments and also has the pedagogic tools and teaching aids required for imparting learning. The Centre also houses a library, an auditorium, an exhibition hall and an open-air amphitheatre. <br /><br />

                    The Bajaj Science Education Centre has close interactions with Bajaj College of Science, Wardha, and with other organizations working in the field of science education. These include Homi Bhabha Centre for Science Education (HBCSE), Mumbai, Padmashri HC Verma' Shiksha Sopan (Kanpur), The Association of Mathematics Teachers of India (AMTI), Chennai, Mumbai Science Teachers Association (MSTA), Mumbai. Faculty members from Bajaj College of Science, Bajaj Institute of Technology and Ramakrishna Bajaj College of Agriculture, all from Wardha, HBCSE (Mumbai), Royal Society of Chemistry (RSC) Teacher trainers, National Anveshika Network of IIT, Kanpur and many others, serve as resource persons in workshops and training programmes conducted by the Centre. The Bajaj Science Education Centre is also one of the approved centres in Maharashtra where competitive exams are conducted. These examinations include the Homi Bhabha Balvaidnyanik Competition, National Standard Examination in Junior Science (NSEJS), Pre-Regional Mathematical Olympiad (PRMO), National Junior Science Olympiad (NJSO), Bhaskaracharya Mathematics Talent Search Competition (BMTSC).
                </p>

                <div className={AboutCSS.Img1}>

                </div>

                <div className={AboutCSS.ct_box2}>
                    <div className={AboutCSS.ct_box2_text}>
                        <span>Our Philosophy</span>
                        <p>Bajaj Science Center was established in 2007 to promote basic science education among students. Leading industrialist Shri.Rahul Bajaj is the president of this institute and Prof.C.K.Desai is the main architect to established this institute. It is different from a routine school or a college laboratory and also from a normal museum .Bajaj Science Center houses all experiments from the regular curriculum and a good number of other experiments which will stimulate the curiosity of the students. Apart from these experiments, center also works on the simple science demonstrations to convince that the science is logical sequence of thought and not magic at all. Keen and careful observations, drawing the inferences estimate and measure the error, design a new experiment or new method by minimizing the errors; these are the qualities which get developed while doing concept oriented experiments. The students learn happily through the combination of innovation, exploration and learning by doing. Students are encouraged to ask every query and doubt to co-explorer teacher as well as friends which encourages dialogue amongst them. Dialogue helps learning and helps understanding of the subject content. Most educationalists say, there should be a paradigm change in education what is it exactly? The science education that the students get through experimentation and dialogue in Bajaj Science Center is definitely one of the correct ways to find a solution.</p>
                        <div className={AboutCSS.Img2}>
                        </div>
                    </div>
                </div>

                <div className={AboutCSS.ct_box3}>
                    <div className={AboutCSS.ct_box3_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper urna in quam ultrices nisl adipiscing.
                    </div>
                    <div className={AboutCSS.ct_box3_btn}>
                        <div className={AboutCSS.btnText}>Meet Our Team</div>
                    </div>
                </div>
            </div>
        </>
    )
}