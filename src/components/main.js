import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import axios from 'axios';

export default class Main extends Component{

    state ={
        data: [],
    };

    componentDidMount(){
        axios.get('http://192.168.150.26:8080/tokopedia/laptop/20').then(res => {
            console.log(res.data.data);
            this.setState({ data: res.data.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <Grid>
                { this.state.data.map(data => 
                <Cell key={data.id} >
                    <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
                        <CardTitle expand style={{color: `#fff`, background: `url("${data.image}") right 15% no-repeat #46B6AC`}}></CardTitle>
                        <CardText>
                            {data.name}
                            <br/>
                            <span><b>Rp. {data.price}</b></span>
                        </CardText>
                        <CardActions border>
                            <Button colored>Lihat Selengkapnya</Button>
                        </CardActions>
                    </Card>
                </Cell>
                )}
            </Grid>
        )
    }
}
