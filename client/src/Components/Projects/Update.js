import React, { Component } from 'react';
import axios from 'axios';

 //đang set tĩnh, ta phải lấy data dsach tất cả member đổ ra từ model User

var ds=[];
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

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDecription  = this.onChangeDecription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            decription: '',
            chkMember: new Map(),
            
        }
    }

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

    componentDidMount() {
        axios.get('/api/projects/edit'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    decription: response.data.decription,
                    chkMember: response.data.chkMember });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDecription(e) {
        this.setState({
            decription: e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            decription: this.state.decription,
            chkMember:[...this.state.chkMember]
          };
        axios.post('/api/projects/edit/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/indexProject');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
             <h3>UPDATE PROJECT</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input className="form-control"
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                  placeholder="Description"
                  name="decription"
                  cols="30"
                  rows="5"
                  value={this.state.decription}
                  onChange={this.onChangeDecription}>       
                </textarea>
              </div>
    
              <div className="form-group">
                 {this.checkboxDs()}
                  
              </div>
              <div className="form-group">
              <button className="btn btn-primary">Update</button>
              </div>
              
            </form>
             
            
                     
          
          </div>
        )
    }
}

