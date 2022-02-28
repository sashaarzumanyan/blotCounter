import React from 'react'
import { Table } from 'react-bootstrap'

const Header = () => {
    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>#</td>
                    <td>A</td>
                    <td>B</td>
                    <td>X</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Header