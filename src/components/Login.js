import React from 'react';

import {Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody} from 'reactstrap';
import {setUserLogged, setUserEmail} from "../redux/actions";
import {connect} from "react-redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    };

    componentDidMount = () => {
        console.log('Home page did mount');
    };

    onSubmit = () => {
        if(this.state.email && this.state.password) {
            this.props.setUserLogged(true);
            this.props.setUserEmail(this.state.email);
        }
    };

    onEmailChange = (e) => {
        const email = e.target.value;
          this.setState({
              email
          });
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState({
            password
        });
    };

    render = () =>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <Card>
                    <CardTitle>Login</CardTitle>
                    <CardBody>
                        <Form >
                            <FormGroup className="my-2">
                                <Label for="email" className="mr-sm-2">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={this.onEmailChange} />
                            </FormGroup>
                            <FormGroup className="my-2">
                                <Label for="password" className="mr-sm-2">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Enter your password" onChange={this.onPasswordChange} />
                            </FormGroup>
                            <Button className="mt-2" onClick={this.onSubmit}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>

            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUserLogged: (value) => dispatch(setUserLogged(value)),
        setUserEmail: (value) => dispatch(setUserEmail(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
