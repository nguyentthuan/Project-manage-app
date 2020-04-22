
import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('/api/users')
            .then(response => {
                console.log(response.data);
                this.setState({users: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    
    tabRow() {
        return this.state.users.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">MEMBER LIST</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Phone</th>
                        <th>Birthday</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}