import React, { Component } from 'react';
import { Route, Link} from "react-router-dom";
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import axios from 'axios';

export default class Main extends Component{

    state ={
        data: [],
    };
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
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
            // <Grid>
            //     { this.state.data.map(data => 
            //     <Cell key={data.id} >
            //         <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
            //             <CardTitle expand style={{color: `#fff`, background: `url("${data.image}") right 15% no-repeat #46B6AC`}}></CardTitle>
            //             <CardText>
            //                 {data.name}
            //                 <br/>
            //                 <span><b>Rp. {data.price}</b></span>
            //             </CardText>
            //             <CardActions border>
            //                 <Button colored>Lihat Selengkapnya</Button>
            //             </CardActions>
            //         </Card>
            //     </Cell>
            //     )}
            // </Grid>
            <Grid>
                { this.state.data.map(data => 
                <Cell key={data.id} >
                    <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
                        <CardTitle expand style={{color: `#fff`, background: `url("${data.image}") right 15% no-repeat #46B6AC`}}></CardTitle>
                        <CardText>
                            {data.name}
                            <br/>
                            <span><b>{data.username}</b></span>
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
