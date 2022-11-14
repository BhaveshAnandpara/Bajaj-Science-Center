import { Box, Stack } from '@mui/system'
import React, { useState, useEffect, useRef } from 'react'
import './Team.css'
import theme from '../../../theme'
import axios from 'axios'
import TableComp from '../../../Components/Table/TableComp'
import * as ReactDOM from 'react-dom/client';
import { Container, TableContainer, Typography } from '@mui/material'

export default function Team() {

    const [data, setData] = useState()

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:5050/teams',
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    const checkTeam = (name) => {
        if (name === "coreTeam") {
            return "Core Team"
        }
        if (name === "teachingStaff") {
            return "Teaching Staff"
        } 
        if (name === "administrativeStaff") {
            return "Administrative Staff"
        } 
        if (name === "mentors") {
            return "Mentors"
        }
    }

    const comp = () => {

        const tables = []

        for (const key in data) {
            tables.push(
                <Container key={key}>
                    <Typography align="center" variant='h6' sx={{ my:"2rem" }} >{ checkTeam(key) }</Typography>
                    <TableComp rows={data[key]} ></TableComp>
                </Container>
            )
        }

        return tables
    }

    return (
        <>
            {/* <Header/> */}
            {/* <Navbar/> */}
            <Stack id="Tablecontainer" sx={{ border: 1 }} direction="column" justifyContent="space-evenly" >
                {comp()}
            </Stack>
        </>
    )
}