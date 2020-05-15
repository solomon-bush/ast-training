import React from 'react';
import List from '@material-ui/core/List';
import CustomListItem from './CustomListItem';

export default class CustomList extends React.Component {
    constructor(props){
        super()
        this.state = {
            games: []
        }
    }

    componentDidMount(){
        console.log('component mounted')
        this.loadGames()
    }
    componentDidUpdate(){
        console.log('updated')
    }

    loadGames = () =>{
        let _games = []

        let headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        fetch('http://localhost:3001/api/game',
            {
               method: "get",
               headers: headers
            }
        ).then(response => response.json())
        .then((data) =>{
            console.log(data)
            data.map((item) =>{
                _games.push(<CustomListItem title={item.name} subTitle={item.description}/>)
            })
            this.setState({games: _games})
        })
    }

    render(){
        return (
            <div style={{backgroundColor: 'lightgrey', width: '600px'}}>
                <List>
                    {this.state.games}
                </List>
            </div>
            
        )
    }


}
