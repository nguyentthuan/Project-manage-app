import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class TableRow extends Component {

    // constructor(props) {
    //     super(props);
    //     this.delete = this.delete.bind(this);
    // }
    // delete() {          
    //     axios.get('/api/users/delete/'+this.props.obj._id)
    //         .then(console.log('Deleted'))
    //         .catch(err => console.log(err));;
                       
    // }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.fullname}
          </td>
          <td>
            {this.props.obj.phone}
          </td>
          <td>
            {this.props.obj.birthday}
          </td>
          <td>
          <Link to={"/editUser/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            {/* <button onClick={this.delete} className="btn btn-danger">Delete</button>  */}
          </td>
        </tr>
    );
  }
}

export default TableRow;