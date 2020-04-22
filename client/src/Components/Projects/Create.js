import React from 'react';
import axios from 'axios';

 const ds=[]; //đang set tĩnh, ta phải lấy data dsach tất cả member đổ ra từ model User
axios.get('/api/users')
.then(res => {
    console.log(res.data);
    //this.setState({users: res.data});
    res.data.map(function (obj, i) {
      return ds.push(obj.fullname);
  });
})
.catch(function (error) {
    console.log(error);
})


class Create extends React.Component {

  state = {
    name: '',
    decription: '',
    chkMember: new Map(),
    

  
  };
  checkboxDs = () => {
    const dsMember = ds.map((value,key) => {    
      return <label className="form-control"  key={key}><input onChange={() => this.checkedMember(value)} checked={this.state.chkMember.has(value)} type="checkbox" name="members" value={value} />{value}</label>  
    });
      return dsMember;
  };

  componentWillMount(){
     this.checkedCheckbox= new Map();

  }
  checkedMember = (name) => {
    if(this.checkedCheckbox.has(name)){
      this.checkedCheckbox.delete(name);
    }else{
      this.checkedCheckbox.set(name);
    }
    this.setState({chkMember: this.checkedCheckbox});
    //console.log(this.state.chkMember);
    
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

  const obj = {
      name: this.state.name,
      decription: this.state.decription,
      chkMember:[...this.state.chkMember]
    };


    axios({
      url: '/api/projects/save',
      method: 'POST',
      data: obj
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
      this.props.history.push('/indexProject');
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      decription: ''
    });
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div style={{marginTop: 10}}>
        <h3>CREATE PROJECT</h3>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <input className="form-control"
              type="text"
              name="name"
              placeholder="Project Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <textarea className="form-control"
              placeholder="Description"
              name="decription"
              cols="30"
              rows="5"
              value={this.state.decription}
              onChange={this.handleChange}>       
            </textarea>
          </div>

          <div className="form-group">
             {this.checkboxDs()}
              
          </div>
          <div className="form-group">
          <button className="btn btn-primary">Submit</button>
          </div>
          
        </form>
         
        
                 
      
      </div>
    );
  }
}


export default Create;

