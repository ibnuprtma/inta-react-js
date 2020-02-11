import React, { Component } from 'react';
import { Route, Link} from "react-router-dom";
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import axios from 'axios';
import Recomendation from './recomendation-product.js'
import './detail-product.css';

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
            <div>
                <Grid>
                    <Cell col={5}>
                        <Card shadow={0} style={{width: '100%', height: '1038px;', background: 'url(https://i.ytimg.com/vi/iHCHrkR0zaY/maxresdefault.jpg) center / cover', margin: 'auto', height: '250px'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            </CardActions>
                        </Card>
                    </Cell>

                    <Cell col={7}>
                        <Grid>
                            <Cell col={9}>
                                <h3 className="product-title">Barang ini nantinya punya saya dan seharusnya begitu</h3>
                                <h6>Rp. 1.000.000.000</h6>
                                <h6>Terjual : 166  | Rating : 4.8</h6>
                                <button className="myButton">Masuk ke Halaman</button>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <h2>Rekomendasi</h2>
                <Recomendation />
            </div>
        )
    }
}


export default DetailProduct;