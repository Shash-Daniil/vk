import React from 'react'
import Axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props)
        Axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( response => {
                debugger;
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>getusers</button>
                {this.props.users.map( elem => 
                    <div key={elem.id}>
                        <span>Name:  {elem.name}</span><br></br>
                        <span>id:  {elem.id}</span><br></br>
                        {elem.followed ? <button onClick={ () => {this.props.unfollow(elem.id)}}>unfollow</button> : <button onClick={() => {this.props.follow(elem.id)}}>follow</button>}
                    </div>
                )}
            </div>
        );
    }
}

export default Users;