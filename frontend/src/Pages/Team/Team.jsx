import React from 'react'
import './Team.css'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import TeamCard from '../../Components/TeamCard/TeamCard'


export default function Team() {

    const [TeamData, setTeamData] = useState()

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:5050/teams',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setTeamData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });



    }, [])

    useEffect(() => {

        try{

            renderOurTeam(TeamData['coreTeam'])
            renderTeachStaff(TeamData['teachingStaff'])
            renderAdminStaff(TeamData['administrativeStaff'])
            renderMentor(TeamData['mentors'])
            
        }catch(e){}
            

    }, [TeamData])


    function renderOurTeam(arr) {

        let ourTeamArr = []
        const root = createRoot(document.getElementById('ourTeamCon'))

        arr.forEach(element => {
            ourTeamArr.push(<TeamCard data={element} />)
        });

        root.render(ourTeamArr)

    }

    function renderTeachStaff(arr) {

        let ourTeamArr = []
        const root = createRoot(document.getElementById('teachStaffCon'))

        arr.forEach(element => {
            ourTeamArr.push(<TeamCard data={element} />)
        });

        root.render(ourTeamArr)

    }

    function renderAdminStaff(arr) {

        let ourTeamArr = []
        const root = createRoot(document.getElementById('adminStaffCon'))

        arr.forEach(element => {
            ourTeamArr.push(<TeamCard data={element} />)
        });

        root.render(ourTeamArr)

    }

    function renderMentor(arr) {

        let ourTeamArr = []
        const root = createRoot(document.getElementById('mentorCon'))

        arr.forEach(element => {
            ourTeamArr.push(<TeamCard data={element} />)
        });

        root.render(ourTeamArr)

    }


    return (
        <>
            <section className="TeamSec">

                <p style={{ 'textAlign': 'center' }} className="red title"> Our Team</p>
                <div id='ourTeamCon' className="ourTeamCon"></div>
                <p style={{ 'textAlign': 'center' }} className="red title"> Teaching Staff</p>
                <div id='teachStaffCon' className="teachStaffCon"></div>
                <p style={{ 'textAlign': 'center' }} className="red title"> Administrative Staff</p>
                <div id='adminStaffCon' className="adminStaffCon"></div>
                <p style={{ 'textAlign': 'center' }} className="red title"> Mentors</p>
                <div id='mentorCon' className="mentorCon"></div>

            </section>
        </>
    )
}

