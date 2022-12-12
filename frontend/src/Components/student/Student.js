import react from 'react';
import studentcss from './Student.module.css';

export default function Student() {
    return (
        <>
            <div className={studentcss.main}>
                <div className={studentcss.stud_ach}>
                    <h2>Student’s Achievments</h2>
                    <div className={studentcss.cards}>
                        <div className={studentcss.card}>
                            <div className={studentcss.img}></div>
                            <div className={studentcss.content}>
                                <h3>John Doe</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan
                                    feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris
                                    at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing </p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className={studentcss.card}>
                            <div className={studentcss.img}></div>
                            <div className={studentcss.content}>
                                <h3>John Doe</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan
                                    feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris
                                    at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing </p>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className={studentcss.end}>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper urna in quam ultrices nisl adipiscing.</h3>
                        <button>Checkout more Achievments</button>
                    </div>
                </div>
                <div className={studentcss.simulation}>
                    <h2>Simulation</h2>
                    <div className={studentcss.cards}>
                        <div className={studentcss.card}>
                            <div className={studentcss.img}></div>
                            <div className={studentcss.content}>
                                <h3>John Doe</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan
                                    feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris
                                    at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing </p>
                                <button>View More</button>
                            </div>
                        </div>
                        <div className={studentcss.card}>
                            <div className={studentcss.img}></div>
                            <div className={studentcss.content}>
                                <h3>John Doe</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan
                                    feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris
                                    at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing </p>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className={studentcss.end}>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper urna in quam ultrices nisl adipiscing.</h3>
                        <button>Checkout more Achievments</button>
                    </div>
                </div>
            </div>
        </>
    )
}





