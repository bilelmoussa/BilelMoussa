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
import ContactSvg from '../../svg_img/ContactSvg';

const styles = theme =>({
    ContactSection:{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 2500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ContactContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1rem',
        justifyContent: 'center',
    },
    ContactContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '45%',
        margin: '1rem 0',
    },
    ContactContentHeader:{
        color: '#72b6ff',
        textTransform: 'capitalize',
        marginBottom: '2rem',
    },
    ContactformControll:{
        display: 'flex',
        margin: '20px 0',
        flexDirection: 'column',
        width: '50%;',
        minWidth: 250,
        maxWidth: 400,
    },
    ContactImgContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '45%',
        margin: '1rem 0',
    },
    ContactImg:{
        display: 'block',
        width: '100%',
        marginTop: '4rem',
        maxWidth: 500,
        minWidth: 280,
    },
    label:{
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    input:{
        border: '1px solid #ccc',
        paddingLeft: 5,
    },
    close: {
        padding: theme.spacing(0.5),
    },
    button:{
        boxShadow: 'none',
        margin: "0 auto 0 0",
        backgroundColor: '#419aff',
        borderColor: '#419aff',
        color: '#fff',
        textTransform: 'capitalize',
        letterSpacing: 1,
        padding: '6px 1.5rem',
        borderBottom: '3px solid #357ac5',
        '&:hover':{
            backgroundColor: '#357ac5',
            borderColor: '#357ac5'
        },
        '&active':{
            boxShadow: 'none',
            backgroundColor: '#357ac5',
            borderColor: '#357ac5'
        }
    },
    msgformControll: {
        display: 'flex', 
        flexDirection: 'column',
        margin: '20px 0',
        width: '50%;',
        minWidth: 250,
        maxWidth: 400,   
    },
    errP:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
        backgroundColor: '#f00',
        borderRadius: 3,
        padding: '0.5rem 1rem',
        marginRight: 'auto'
    },
    sucsP:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
        backgroundColor: '#34d265',
        borderRadius: 3, 
        padding: '0.5rem 1rem',
        marginRight: 'auto'
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%', 
        height: '100%'
    },
    legnthP:{
        textAlign: 'right',
        margin: '10px 0'
    },
    '@media(max-width: 1120px)':{
        ContactImg:{
            maxHeight: 500, 
        }
    },
    '@media(max-width: 770px)':{
        ContactContainer:{
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
        },
        ContactContent:{
            width: '90%'
        },
        ContactformControll:{
            margin: '20px auto',
        },
        ContactImgContainer:{
            display: 'block',
            width: '100%',
        },
        ContactImg:{
            display: 'block',
            width: '90%',
            maxWidth: 400,
            margin: '0 auto',
        }

    }
});



const RenderErr = (errors, classes) =>{
    if(empty(errors)){
        return(null);
    }else{
        return (
            <div className={classes.msgformControll}>
                {errors.map((err, i)=>{
                    return(<p className={classes.errP} key={i}>{err}</p>);
                })}
            </div>
        )
    }
}

const RenderSuccessMsg = (success_msg, classes) =>{
    if(empty(success_msg)){
        return(null);
    }else{
        return (
            <div className={classes.msgformControll} >
                {success_msg.map((msg, i)=>{
                    return(<p className={classes.sucsP} key={i}>{msg}</p>);
                })}
            </div>
        )
    }
}

class Contact extends Component {
    constructor(){
        super();
        this.state={
            phone: '',
            name: '',
            email: '',
            comment: '',
            errors: [],
            success_msg: [],
            country: 'TN'
        }
    }

    componentDidMount(){    
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(!empty(this.props.Msg_res.response)){
                if(this.props.Msg_res.response.success === true){
                    let msg = 'Message Sent with success !';
                    let msgs = this.state.success_msg;
                    msgs.push(msg);
                    this.setState({success_msg: msgs, errors: [], phone: '', name: '', email: '', comment: ''});
                }else{
                    let msg = this.props.Msg_res.response.error;
                    let errs = this.state.errors;
                    if(errs.indexOf(msg) === -1){
                        errs.push(msg);
                        this.setState({errors: errs});
                    }
                    this.setState({success_msg: []});
                }
            }

            if(this.props.ipinfo){
                this.setState({country: this.props.ipinfo.data.country});
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
            let msg = 'Phone Number is Not Valid !';
            if(errors.indexOf(msg) === -1){
                errors.push(msg);
                Valid = false;
                this.setState({errors: errors});
            }
        }

        if(!checkEmail(email)){
            let msg = 'Email is Not Valid !';
            if(errors.indexOf(msg) === -1){
                errors.push(msg);
                Valid = false;
                this.setState({errors: errors});
            }
        }

        if(comment.trim().length < 30){
            let msg = 'At least 30 character in Comment Field !';
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
        const  { errors, success_msg, country } = this.state;

        return (
            <div className={classes.ContactSection}>
                <div className={classes.ContactContainer}>
                    <div className={classes.ContactContent}>
                        <div className={classes.ContactContentHeader}>
                            <h1>Contact Form</h1>
                        </div>
                        {RenderErr(errors, classes)}
                        {RenderSuccessMsg(success_msg, classes)}
                        <div>
                            <form className={classes.form} onSubmit={this.handeleSubmit}>

                                <div className={classes.ContactformControll}>
                                    <label className={classes.label}>Full name :</label>
                                    <Input
                                        required
                                        value={ this.state.name }
                                        onChange={this.handleChange('name')}
                                        className={classes.input}
                                    />
                                </div>

                                <div className={classes.ContactformControll}>
                                    <label className={classes.label}>Phone Number :</label>
                                    <PhoneInput
                                        inputComponent={createInput}
                                        countrySelectComponent={CountrySelectReactResponsiveUI}
                                        labels={labels}
                                        metadata={metadata}
                                        internationalIcon={InternationalIcon}
                                        required
                                        country={country}
                                        value={ this.state.phone }
                                        onChange={this.handlePhoneChange}
                                    />
                                </div>

                                <div className={classes.ContactformControll}>
                                    <label className={classes.label}>Email :</label>
                                    <Input
                                        type="email"
                                        required
                                        value={ this.state.email }
                                        onChange={this.handleChange('email')}
                                        className={classes.input}
                                    />
                                </div>

                                <div className={classes.ContactformControll}>
                                    <label className={classes.label}>Comments/Questions :</label>
                                    <Input
                                        multiline
                                        rows={4}
                                        required
                                        value={ this.state.comment }
                                        onChange={this.handleChange('comment')}
                                        className={classes.input}
                                    />
                                    <p className={classes.legnthP}>{this.state.comment.trim().length}/30</p>
                                </div>

                                <div className={classes.ContactformControll}>
                                    <Button 
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        className={classes.button}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </form> 
                        </div>
                    </div>
                    <div className={classes.ContactImgContainer}>
                        <ContactSvg className={classes.ContactImg} />
                    </div>
                </div>
            </div>
        )
    }
}

Contact.protoType = {
    classes: PropTypes.object.isRequired,
    Msg_res: PropTypes.object.isRequired,
    ipinfo: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    Msg_res: state.Msg_res,
    ipinfo: state.ipinfo
})

export default connect(mapStateToProps, {PostMessage})(withStyles(styles)(Contact));
