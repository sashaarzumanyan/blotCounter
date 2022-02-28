import React from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const BlotTable = () => {
    const data = useSelector(function(state){
        return state
    })
    return (
        
        <Table striped bordered hover>
            <tbody>
                {data.map((e, i) =>
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{e.a}</td>
                        <td>{e.b}</td>
                        <td>{e.x}</td>
                    </tr>
                )}
            </tbody>
        </Table>
        
    )
}

export default BlotTable