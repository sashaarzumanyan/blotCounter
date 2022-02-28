import React, { useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()

    return (
        <Form className='d-flex '>
            <Form.Group className="d-flex  mb-3" >
                <InputGroup.Text >#</InputGroup.Text>
                <Form.Control onChange={(e) => setValue1(e.target.value)} type="number" placeholder="hasiv" />
                <Form.Control onChange={(e) => setValue2(e.target.value)} type="number" placeholder="hasiv" />
                <Form.Control onChange={(e) => setValue3(e.target.value)} type="number" placeholder="hasiv" />
            </Form.Group>
            <Button onClick={(e) => {
                e.preventDefault()
                dispatch({ type: "ADD_NUMBER", payload: { a: value1, b: value2, x: value3 } })
            }} variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default Counter