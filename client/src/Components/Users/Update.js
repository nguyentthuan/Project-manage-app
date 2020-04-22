import React, { Component } from 'react';
import axios from 'axios';

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangePhone  = this.onChangePhone.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullname: '',
            phone: '',
            birthday:''
        }
    }
    componentDidMount() {
        axios.get('/api/users/edit'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    fullname: response.data.fullname,
                    phone: response.data.phone,
                    birthday: response.data.birthday });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeFullName(e) {
        this.setState({
            fullname: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onChangeBirthday(e) {
        this.setState({
            birthday: e.target.value
        })
    }
    
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            //fullname: this.state.fullname,
            phone: this.state.phone,
            birthday: this.state.birthday
        };
        axios.post('/api/users/edit/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/indexUser');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">UPDATE MEMBER</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>FullName:  </label>
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={this.state.fullname}
                            onChange={this.onChangeFullName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.phone}
                               onChange={this.onChangePhone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Birthday: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.birthday}
                               onChange={this.onChangeBirthday}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

