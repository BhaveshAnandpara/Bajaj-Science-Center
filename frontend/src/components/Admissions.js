import react from 'react';
import admissionCss from './Admissions.module.css';

export default function Admissions() {
    return (
        <>
            <div className={admissionCss.container}>
                <div className={admissionCss.adm_block}>
                    <span className={admissionCss.title}>Admissions</span>
                    <p className={admissionCss.info}>Admissions to the Bajaj Science Education Centre are made through entrance exams conducted for school students of 5th and 7th Standards. Students from all schools of Wardha district are invited for the entrance exam. <br /><br /> Entrance Exam dates: 5th Std: First Sunday of April (Release of notification: First week of March) 7th Std.: First Sunday of March (Release of notification: First week of February) The 7th Standard students who are admitted continue their association with the Centre up to the 10th Standard.

                        <br /><br /> Download Previous Year Question Paper</p>
                </div>

                <div className={admissionCss.program_block}>
                    <span className={admissionCss.title}>Teaching Program</span>
                    <p className={admissionCss.info}>
                        <span>5th and 6th Std. Batch:</span> <br /> Selected students (35) attend two sessions per week, during which they carry out experiments/activities based on their school curricula. They are also given some demonstrations of scientific concepts by the teachers. These students are trained for competitive exams like Homi Bhabha Bal Vaigyanik Pratiyogita and Bhaskaracharya Mathematics Talent Search Competition.
                    </p>
                    <p className={admissionCss.info}>
                        <span>7th Std. Batch:</span> <br /> Selected students (about 200) are split into two batches. A Practical batch and a Scholar batch. Both batches are given hands-on training in the experiments included in their school curricula and outside it. Practical batch students attend one laboratory session per week, besides participating in workshops conducted by guest faculty. The scholar batch attend three lecture sessions per week on topics in science and mathematics besides one laboratory session. They are also given short-term projects, which they carry out with help from their mentors.
                    </p>
                    <p className={admissionCss.info}>
                        <span>8th and 9th Std. Batch:</span> <br /> On the basis of their performance, the 7th Std. students who go to the 8th Std., are divided into three batches: (a) Practical Batch: Students attend one laboratory session per week. (b) Scholar Batch: Students attend one laboratory session and one lecture session on topics in science and mathematics per week. 15-20 students are selected for this program. (c) Pragyaan Batch: Students attend lecture and laboratory sessions for six days a week. 15 students from 7th Std. batch are selected for this program and are trained for the National Junior Science Olympiad programme by experts across the country.
                    </p>
                    <p className={admissionCss.info}>
                        <span>10th Std. Batch:</span> <br />Depending on the interest and involvement of 9th Std. students, they are divided into two batches in the 10th Std. (a) Practical Batch: Students attend one laboratory session per week based on their school curricula. (b) Scholar Batch: Students attend two laboratory sessions per week. Students are also trained for advanced computational tools, besides one laboratory session per week.
                    </p>
                </div>

                <div className={admissionCss.box_block}>
                    <span className={admissionCss.title}>Regular Activities</span>
                    <div className={admissionCss.box_content}>
                        <div className={admissionCss.box}>
                            <span>Summer Schools</span>
                            <p className={admissionCss.box_info}>Every year in May, a summer school of 2-week duration is organized for the existing students of the centre, where experts from institutions all over India are invited to conduct activity-based sessions</p>
                        </div>
                        <div className={admissionCss.box}>
                            <span>Summer Camps</span>
                            <p className={admissionCss.box_info}>Every year in the last week of April, an activity-based one week summer camp is organized for 7th std. students. This camp is also open for students who are not the part of the centre.</p>
                        </div>
                        <div className={admissionCss.box}>
                            <span>NMTC Exposure Camp</span>
                            <p className={admissionCss.box_info}>This camp is organised in the first week of June every year to impart training to students who wish to appear for the AMTI's National Mathematics Talent Contest Examination. This camp is also open for students who are not the part of the centre.</p>
                        </div>
                        <div className={admissionCss.box}>
                            <span>Homi Bhabha Balvaidyanik Exposure Camp</span>
                            <p className={admissionCss.box_info}>This camp is organised for two weeks each year in the summer vacations to impart training to students of 6th and 9th std. from Vidarbha region, who wish to appear for this exam. This camp is also open for students who are not the part of the centre.</p>
                        </div>
                        <div className={admissionCss.box}>
                            <span>Weekend Science Stories (Webinar via YouTube live streaming)</span>
                            <p className={admissionCss.box_info}>This program is organized on weekends to promote science education. Experts from across the country are invited to deliver talks/stories/science demonstrations.</p>
                        </div>
                        <div className={admissionCss.box}>
                            <span>Exhibitions, Science Shows and Science Talks</span>
                            <p className={admissionCss.box_info}>Open house activities are organized at the Centre periodically, where people from Wardha are invited for science shows, science talks and science exhibitions show casing the activities of students. Science shows are held for students to familiarize them with important astronomy related events like conjunctions of stars, eclipses, zero shadow day etc.</p>
                        </div>
                        <div className={admissionCss.box}>
                            <span>Competitions</span>
                            <p className={admissionCss.box_info}>Quiz competitions, video making competitions and other activities are carried out to celebrate the National Science day, National Mathematics day and the World Environment day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}