import React from 'react'
import './Admissions.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../../Components/Cards/Cards'

import regularActivities from '../../Data/RegularActivities/RegularActivities'
import { createRoot } from 'react-dom/client'

export default function Admissions() {

    useEffect(() => {

        let arr = []
        const root = createRoot(document.getElementById('regularAct')
        )
        regularActivities.forEach((activity) => {
            arr.push(<Cards title={activity.title} content={activity.content} regularActivity={true} />)
        })

        root.render(arr)



    }, [])



    return (
        <>
            <section className="admissionCon">

                <p className="red title"> Admissions  </p>
                <p className="cardContent">
                    Admissions to the Bajaj Science Education Centre are made through entrance exams conducted for school students of 5th and 7th Standards. Students from all schools of Wardha district are invited for the entrance exam.
                    <br />
                    <br />
                    Entrance Exam dates:
                    <br />
                    5th Std: First Sunday of April (Release of notification: First week of March)
                    <br />
                    7th Std.: First Sunday of March (Release of notification: First week of February)
                    <br />
                    <br />
                    The 7th Standard students who are admitted continue their association with the Centre up to the 10th Standard.
                    <br />
                    <br />
                    <Link to='#' >Download Previous Year Question Paper</Link>
                </p>

                <p className="red title"> Teaching Programs  </p>
                <p className="cardContent">
                    <b> 5th and 6th Std. Batch: </b>
                    <br />
                    Selected students (35) attend two sessions per week, during which they carry out experiments/activities based on their school curricula. They are also given some demonstrations of scientific concepts by the teachers.
                    These students are trained for competitive exams like Homi Bhabha Bal Vaigyanik Pratiyogita and Bhaskaracharya Mathematics Talent Search Competition.
                    <br />
                    <br />
                    <b> 7th Std. Batch: </b>
                    <br />
                    Selected students (about 200) are split into two batches.
                    A Practical batch and a Scholar batch. Both batches are given hands-on training in the experiments included in their school curricula and outside it. Practical batch students attend one laboratory session per week, besides participating in workshops conducted by guest faculty. The scholar batch attend three lecture sessions per week on topics in science and mathematics besides one laboratory session. They are also given short-term projects, which they carry out with help from their mentors.
                    <br />
                    <br />
                    <b> 8th and 9th Std. Batch: </b>
                    <br />
                    On the basis of their performance, the 7th Std. students who go to the 8th Std., are divided into three batches:
                    <br />
                    (a) Practical Batch: Students attend one laboratory session per week.
                    <br />
                    (b) Scholar Batch: Students attend one laboratory session and one lecture session on topics in science and mathematics per week. 15-20 students are selected for this program.
                    <br />
                    (c) Pragyaan Batch: Students attend lecture and laboratory sessions for six days a week. 15 students from 7th Std. batch are selected for this program and are trained for the National Junior Science Olympiad programme by experts across the country.
                    <br />
                    <br />
                    <b> 10th Std. Batch: </b>
                    <br />
                    Depending on the interest and involvement of 9th Std. students, they are divided into two batches in the 10th Std.
                    <br />
                    (a) Practical Batch: Students attend one laboratory session per week based on their school curricula.
                    <br />
                    (b) Scholar Batch: Students attend two laboratory sessions per week. Students are also trained for advanced computational tools, besides one laboratory session per week.
                    <br />
                </p>

                <p className="red title"> Regular Activities  </p>

                <div id='regularAct' className="regularActSec"></div>


            </section>


        </>
    )
}
