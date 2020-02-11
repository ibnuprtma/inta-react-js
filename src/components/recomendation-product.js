import React, { Component } from 'react';
import { Route, Link} from "react-router-dom";
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import axios from 'axios';

class DetailProduct extends Component{

    state ={
        data: [],
    };

    componentDidMount(){
        axios.get('').then(res => {
            // console.log(res.data.data);
            // this.setState({ data: res.data.data})
            console.log(res.data);
            this.setState({ data: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render(){
        return(
            <Grid>
                <Cell>
                    <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
                        <CardTitle expand style={{color: `#fff`, background: `url("") right 15% no-repeat #46B6AC`}}></CardTitle>
                        <CardText>
                            asd
                            <br/>
                            <span><b>asdasd</b></span>
                        </CardText>
                        <CardActions border>
                            <Button colored>Lihat Selengkapnya</Button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        )
    }
}


export default DetailProduct;