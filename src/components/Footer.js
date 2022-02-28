import React from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const Footer = () => {
    const data = useSelector(function(state){
        return state
    })
    
  return (
    <Table striped bordered hover>
            <tbody>
                <tr></tr>
            </tbody>
        </Table>
  )
}

export default Footer