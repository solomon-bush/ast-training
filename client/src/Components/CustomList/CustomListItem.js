import React from 'react';
import {ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';


export default class CustomListItem extends React.Component {
    constructor(props){
        super()
    }
    handleClick = () =>{
        console.log(this.props.title + ' was clicked')
    }

    render(){
        return (
            <ListItem button onClick={this.handleClick}>
                <ListItemAvatar>
                <Avatar>
                    S
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.title}
                    secondary={this.props.subTitle}
                />
            </ListItem>
        )
    }


}
