import React from 'react';
import axios from 'axios';

class Create extends React.Component {

  state = {
    fullname: '',
    phone: '',
    birthday:'',  
  };

  // componentDidMount = () => {
  //   this.getUserPost();
  // };


  // getUserPost = () => {
  //   axios.get('/api')
  //     .then((response) => {
  //       const data = response.data;
  //       this.setState({ posts: data });
  //       console.log('Data has been received!!');
  //     })
  //     .catch(() => {
  //       alert('Error retrieving data!!!');
  //     });
  // }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    const obj = {
      fullname: this.state.fullname,
      phone: this.state.phone,
      birthday: this.state.birthday
    };
    axios({
      url: '/api/users/save',
      method: 'POST',
      data: obj
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getUserPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;

      this.props.history.push('/indexUser');
  };

  resetUserInputs = () => {
    this.setState({
      fullname: '',
      phone: '',
      birthday: '',
    });
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div style={{marginTop: 10}}>
        <h3>CREATE MEMBER</h3>
        <form onSubmit={this.submit}>
          <div className="form-group">
          <label>Fullname: </label>  
          <input className="form-control"
              type="text"
              name="fullname"
              placeholder="Fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
          <label>Phone Number: </label>            
            <input className="form-control"
              type="text"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />          
          </div>

          <div className="form-group">
          <label>Birthday: </label>            
            <input className="form-control"
              type="text"
              name="birthday"
              placeholder="Birthday"
              value={this.state.birthday}
              onChange={this.handleChange}
            />          
          </div>

          <div className="form-group">
          <input type="submit" value="CREATE" className="btn btn-primary"/>
      </div>
        </form>

        
      </div>
    );
  }
}


export default Create;