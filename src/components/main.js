import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import axios from 'axios';


// class Main extends Component {
//     render(){
//         return(
//             <div className="projects-grid container">
//                 <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
//                     <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
//                     <CardText>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Aenan convallis.
//                     </CardText>
//                     <CardActions border>
//                         <Button colored>View Updates</Button>
//                     </CardActions>
//                 </Card>
//                 <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
//                     <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
//                     <CardText>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Aenan convallis.
//                     </CardText>
//                     <CardActions border>
//                         <Button colored>View Updates</Button>
//                     </CardActions>
//                 </Card>
//                 <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
//                     <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
//                     <CardText>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Aenan convallis.
//                     </CardText>
//                     <CardActions border>
//                         <Button colored>View Updates</Button>
//                     </CardActions>
//                 </Card>
//             </div>
//         )
//     }
// }

export default class Main extends Component{

    state ={
        persons: [],
    };

    componentDidMount(){
        axios.get('http://192.168.150.26:8080/tokopedia/laptop/20').then(res => {
            console.log(res);
            this.setState({ persons: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <Grid>
                { this.state.persons.map(person => 
                <Cell key={person.id} >
                    <Card shadow={0} style={{width: '280px', height: '280px',  margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>{person.name}</Button>
                        </CardActions>
                    </Card>
                </Cell>
                )}
            </Grid>
        )
    }
}
