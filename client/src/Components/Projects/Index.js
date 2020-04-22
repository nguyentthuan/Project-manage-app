
  import React, {Component} from 'react';
  import axios from 'axios';
  import TableRow from './TableRow';
  
  export default class Index extends Component {
      constructor(props) {
          super(props);
          this.state = {projects: []};
      }
  
      componentDidMount() {
          axios.get('/api/projects')
              .then(response => {
                  console.log(response.data);
                  this.setState({projects: response.data});
              })
              .catch(function (error) {
                  console.log(error);
              })
      }
  
      tabRow() {
          return this.state.projects.map(function (object, i) {
              return <TableRow obj={object} key={i}/>;
          });
      }
  
      render() {
          return (
              <div>
                  <h3 align="center"> PROJECT LIST</h3>
                  <table className="table table-striped" style={{marginTop: 20}}>
                      <thead>
                      <tr>
                          <th>Name</th>
                          <th>Dicription</th>
                          <th>Members</th>
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