import React, { Component } from 'react';
import {  withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';
import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";
import {empty} from '../../../is-empty'
import {checkEmail} from '../../../IsEmail';
import 'react-responsive-ui/style.css'
import 'react-phone-number-input/style.css';
import labels from 'react-phone-number-input/locale/en';
import metadata from 'libphonenumber-js/metadata.min.json';
import InternationalIcon from 'react-phone-number-input/international-icon';
import CountrySelectReactResponsiveUI from './PhoneSelect';
import createInput from './PhoneInput';
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';
import  { PostMessage } from '../../../actions/apiCalls';

const styles = theme =>({
    label:{
        textTransform: "uppercase",
        letterSpacing: 1,
        fontWeight: "bold",
        marginBottom: 15,
    },
    input:{
        border: "1px solid #ccc",
        paddingLeft: 5,
    },
    close: {
        padding: theme.spacing(0.5),
    },
    button:{
        boxShadow: 'none',
        margin: "0 auto 0 0",
        backgroundColor: "#419aff",
        borderColor: '#419aff',
        color: "#fff",
        textTransform: 'capitalize',
        letterSpacing: 1,
        padding: '6px 1.5rem',
        borderBottom: "3px solid #357ac5",
        '&:hover':{
            backgroundColor: "#357ac5",
            borderColor: "#357ac5"
        },
        '&active':{
            boxShadow: 'none',
            backgroundColor: "#357ac5",
            borderColor: "#357ac5"
        }
    }
});


class Contact extends Component {
    constructor(){
        super();
        this.state={
            phone: "",
            name: "",
            email: "",
            comment: "",
            errors: [],
            success_msg: [],
        }
    }

    componentDidMount(){    
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(this.props.Msg_res){
                if(this.props.Msg_res.response.success === true){
                    let msg = "Message Sent with success !";
                    let msgs = this.state.success_msg;
                    msgs.push(msg);
                    this.setState({success_msg: msgs, errors: [], phone: "", name: "", email: "", comment: ""});
                }else{
                    let msg = this.props.Msg_res.response.message;
                    let errs = this.state.errors;
                    if(errs.indexOf(msg) === -1){
                        errs.push(msg);
                        this.setState({errors: errs});
                    }
                    this.setState({success_msg: []});
                }
            }
        }else{
            return null;
        }
    }

    handleChange = (name) => event => {
        this.setState({...this.state, [name]: event.target.value, errors: [], success_msg: [] })
    }

    handlePhoneChange = value =>{
        this.setState({...this.state, phone: value, errors: [], success_msg: []});
    }

    handeleSubmit = (event) =>{
        event.preventDefault();
        const {name,phone, email, errors, comment} = this.state;
        let Valid = true;

        if(!isValidPhoneNumber(phone)){
            let msg = "Phone Number is Not Valid !";
            if(errors.indexOf(msg) === -1){
                errors.push(msg);
                Valid = false;
                this.setState({errors: errors});
            }
        }

        if(!checkEmail(email)){
            let msg = "Email is Not Valid !";
            if(errors.indexOf(msg) === -1){
                errors.push(msg);
                Valid = false;
                this.setState({errors: errors});
            }
        }

        if(comment.trim().length < 30){
            let msg = "At least 30 character in Comment Field !";
            if(errors.indexOf(msg) === -1){
                errors.push(msg);
                Valid = false;
                this.setState({errors: errors});
            }
        }

        if(Valid){
            let phone_data = parsePhoneNumber(phone);

            const data = {
                message: comment,
                name: name,
                email: email,
                phone_number: {
                    country: phone_data.country,
                    countryCallingCode:phone_data.countryCallingCode,
                    nationalNumber: phone_data.nationalNumber,
                    number: phone_data.number,
                }  
            }
            this.props.PostMessage(data);
        }

    }
    
    render() {
        const { classes } = this.props;
        const  { errors, success_msg } = this.state;

        const RenderErr = () =>{
            if(empty(errors)){
                return(null);
            }else{
                return (
                    <div className={classes.formControll} style={{display: "flex", flexDirection: "column"}}>
                        {errors.map((err, i)=>{
                            return(<p style={{color: "#fff", fontSize: 16, marginBottom: 5, backgroundColor: "#f00", borderRadius: 3, padding: "0.5rem 1rem", marginRight: "auto"}} key={i}>{err}</p>);
                        })}
                    </div>
                )
            }
        }

        const RenderSuccessMsg = () =>{
            if(empty(success_msg)){
                return(null);
            }else{
                return (
                    <div className={classes.formControll} style={{display: "flex", flexDirection: "column"}}>
                        {success_msg.map((msg, i)=>{
                            return(<p style={{color: "#fff", fontSize: 16, marginBottom: 5, backgroundColor: "#34d265", borderRadius: 3, padding: "0.5rem 1rem", marginRight: "auto"}} key={i}>{msg}</p>);
                        })}
                    </div>
                )
            }
        }

        return (
            <div id="contact_section">
                <div id="contact_container">
                    <div id="contact_content">
                        <div id="contact_header">
                            <h1>Contact Form</h1>
                        </div>
                        {RenderErr()}
                        {RenderSuccessMsg()}
                        <div id="contact_form">
                            <form style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}} onSubmit={this.handeleSubmit}>

                                <div className="formControll">
                                    <label className={classes.label}>Full name :</label>
                                    <Input
                                        required
                                        value={ this.state.name }
                                        onChange={this.handleChange('name')}
                                        className={classes.input}
                                    />
                                </div>

                                <div className="formControll">
                                    <label className={classes.label}>Phone Number :</label>
                                    <PhoneInput
                                        inputComponent={createInput}
                                        countrySelectComponent={CountrySelectReactResponsiveUI}
                                        labels={labels}
                                        metadata={metadata}
                                        internationalIcon={InternationalIcon}
                                        required
                                        country="TN"
                                        value={ this.state.phone }
                                        onChange={this.handlePhoneChange}
                                    />
                                </div>

                                <div className="formControll">
                                    <label className={classes.label}>Email :</label>
                                    <Input
                                        type="email"
                                        required
                                        value={ this.state.email }
                                        onChange={this.handleChange('email')}
                                        className={classes.input}
                                    />
                                </div>

                                <div className="formControll">
                                    <label className={classes.label}>Comments/Questions :</label>
                                    <Input
                                        multiline
                                        rows={4}
                                        required
                                        value={ this.state.comment }
                                        onChange={this.handleChange('comment')}
                                        className={classes.input}
                                    />
                                    <p style={{textAlign: "right", margin: "10px 0"}}>{this.state.comment.trim().length}/30</p>
                                </div>

                                <div className="formControll">
                                    <Button 
                                        variant='contained'
                                        color="primary"
                                        type="submit"
                                        className={classes.button}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </form> 
                        </div>
                    </div>
                    <div id="contact_svg">
                        <img alt="" src={require('../../../static/img/contact.svg')} />
                    </div>
                </div>
            </div>
        )
    }
}

Contact.protoType = {
    classes: PropTypes.object.isRequired,
    Msg_res: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	Msg_res: state.Msg_res,
})

export default connect(mapStateToProps, {PostMessage})(withStyles(styles)(Contact));
