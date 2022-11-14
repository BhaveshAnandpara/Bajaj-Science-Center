import React from 'react'
import { Box, TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Container, recomposeColor } from '@mui/material'
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

const properPath = (path) => {
    path = path.replaceAll('\\', '/')
    path = "../../Assets" + path.split('public')[1]
    console.log(path)
    return path
}

const table = (rows) => {

    const arr = []

    rows.map((row) => {
        arr.push(
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center" >{row.data.name}</TableCell>
                <TableCell align="center">{row.data.designation}</TableCell>
                <TableCell align="center">

                </TableCell>
                <TableCell align="center"> <DeleteIcon color='error' /> </TableCell>
            </TableRow>
        )
    })

    return arr

}

export default function TableComp({ rows }) {


    return (
        <Container >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ border: 1 }}>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Designation</TableCell>
                            <TableCell align="center">Select Profile</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table(rows)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
