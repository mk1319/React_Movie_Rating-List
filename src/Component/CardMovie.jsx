import React,{useContext} from 'react'
import {Card,Col,ProgressBar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./card.css"

const CardMovie=(props)=>{

       const MovieData=props.item

        const rating=MovieData.vote_average*10
    return(
            <React.Fragment>
              <Col  xs={6} lg={3} md={6} style={{marginTop:10}}>
                <Card
                    className="cardStyle"
                >

                  <Card.Img className="cardimg" variant="top" src={MovieData.poster_path!=null?`https://image.tmdb.org/t/p/w500`+MovieData.poster_path:""} style={{height:250}}/>
                    <Card.Body>
                      <ProgressBar variant="success"  now={rating}  label={`${rating}%`} style={{height:40,width:40,borderRadius:50,
                        position:"absolute",bottom:0,right:0
                        }}
                      />
                      <Card.Title style={{fontSize:15}}>{MovieData.original_title}</Card.Title>
    
        
                      <Card.Text>
                            { MovieData.release_date}
                      </Card.Text>
                    </Card.Body>
                </Card>         
        
                </Col>
            </React.Fragment>       
    )
}

export default CardMovie