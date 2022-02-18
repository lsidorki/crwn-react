import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { googleSignInStart } = this.props;
        return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your user credentials.</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
                <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label='password' required />
                <div className="buttons">
                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} value="Submit Form" isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
