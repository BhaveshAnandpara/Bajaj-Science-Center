import react from 'react';
import infracss from './Infra.module.css';

export default function Infra() {
    return (
        <>
            <div className={infracss.main}>
                <h2>Our Infrastructure</h2>
                <p className={infracss.content}>Our laboratories provide our students with access to the latest top-of-the-line scientific instruments and tools so that they may experiment.It has six laboratories (Physics, Chemistry, Mathematics, Biology, Electronics and Computers, Astronomy). Each laboratory is equipped for carrying out the prescribed experiments and also has the pedagogic tools and teaching aids required for imparting learning. The Centre also houses a library, an auditorium, an exhibition hall and an open-air amphitheatre. and explore.</p>
                <div className={infracss.cards}>
                    <div className={infracss.left}>
                        <div className={`${infracss.card} ${infracss.physics}`}>
                            Physics Lab
                        </div>
                        <div className={`${infracss.card} ${infracss.ict}`}>
                            ICT Lab
                        </div>
                        <div className={`${infracss.card} ${infracss.hall}`}>
                            Multipurpose Hall
                        </div>
                        <div className={`${infracss.card} ${infracss.chemistry}`}>
                            Chemistry Lab
                        </div>
                    </div>
                    <div className={infracss.right}>
                        <div className={`${infracss.card} ${infracss.maths}`}>
                            Mathematics  Lab
                        </div>
                        <div className={`${infracss.card} ${infracss.makers}`}>
                            Makers Space
                        </div>
                        <div className={`${infracss.card} ${infracss.openAir}`}>
                            Open Air Amphitheatre
                        </div>
                        <div className={`${infracss.card} ${infracss.biology}`}>
                            Biology Lab
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



