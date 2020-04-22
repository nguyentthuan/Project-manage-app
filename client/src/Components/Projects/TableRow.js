import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('/api/projects/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))  
            alert("Deleted successfully, Reload the page..!");            
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.decription}
          </td>
          <td>
          {this.props.obj.chkMember.map((v,i) => (
                              <div key={i} >            
                                 <p> {i+1}. {v}</p>
                             </div>))}
          </td>
          <td>
          <Link to={"/editProject/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>            
              <button onClick={this.delete} className="btn btn-danger">Delete</button> 
          </td>
        </tr>
    );
  }
}

export default TableRow;