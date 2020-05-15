import React, { Component } from 'react'


export default class GameList extends Component{
    constructor(props){
        super(props)

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
                _games.push(<li key={item.id}>{item.name}</li>)
            })
            this.setState({games: _games})
        })
    }

    render(){
        return(
            <div>
                <h1>Games</h1>
                <ul>
                    {this.state.games}
                </ul>
                <button onClick={this.loadGames}>
                    Refresh
                </button>
            </div>
        )
    }
    
}