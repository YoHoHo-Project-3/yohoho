import React from 'react'
import {Card} from 'react-bootstrap'
export default function CardInfo(props) {
    return (
        <Card style={{ width: '18rem' }}>
    <i className={props.data.icon}/> 
        <Card.Body>
          <Card.Title>  {props.data.title} </Card.Title>
          <Card.Text>
        
    {props.data.description} 
          </Card.Text>
        
        </Card.Body>
      </Card>
    )
        
}
