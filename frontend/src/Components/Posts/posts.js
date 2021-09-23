import React from 'react';
import CardUI from './cardUI';
import axios from 'axios';

class Posts extends React.Component
{
    constructor()
    {
        super();
        this.state={
            title : '',
            content : ''
        };

       this.textChangeHandler=this.textChangeHandler.bind(this); 
       this.postHandler=this.postHandler.bind(this);
    }
    
    textChangeHandler(e)
    {
     this.setState({
         [e.target.name] : e.target.value
     })
    }

    async postHandler()
    {
        await axios.post('http://localhost:4000/posts/',{
               title :this.state.title,
               content : this.state.content
        })
        .then((u)=>{
            console.log('successfully posted');
            console.log(u);
        })
        .catch((err)=>{
            console.log(err);
        })
        ;
    }

    render()
    {
        return (
            <div style={{
                position: 'absolute', left: '40%'
            }}>
                <br />
                <h1>Mini Microservice App</h1>
                <br />
            <CardUI postHandler={this.postHandler} textChangeHandler={this.textChangeHandler}/>
            </div>
        );
    }
};

export default Posts;