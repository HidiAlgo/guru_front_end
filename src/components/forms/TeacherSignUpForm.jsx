import React, { Component } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import SignUpService from '../../services/SignUpService'

export class TeacherSignUpForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user_details:{
                first_name: '',
                last_name: '',
                phone_number: '',
                email: '',
                password: '',
                birth_date: new Date(),
                nic: '',
                street_address: '',
                street_address2: '',
                city: '',
                state:'',
                zip_code: '',
                nationality: '',
                religion: '',
                photo: null
            },
            email_error_message: null,
            nic_error_message: null
        }
    }
    
    validate_details = (values) => {
        console.log(values)
        SignUpService.validateEmailAndNIC(values)
            .then((response) => {
                this.props.click_button(values)
            }).catch((error) => {
                if(error.response.data ===1){
                    this.setState({
                        email_error_message: "This email is already taken",
                        nic_error_message: null
                    })
                }else{
                    this.setState({
                        email_error_message: null,
                        nic_error_message: "This NIC is already taken"
                    })
                }

            })
    }
    // this.props.click_button
    render() {
        return (
            <div>
                <h5 className="text-center">User details</h5>
                 <Formik  initialValues={this.state.user_details} onSubmit={this.validate_details}>      
                    {
                        (props) => ( 
                            <Form>
                                <div className="container">
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label>First Name</label>
                                            <Field className="form-control" type="text" name="first_name"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Last Name</label>
                                            <Field className="form-control" type="text" name="last_name"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label>Phone number</label>
                                            <Field className="form-control" type="text" name="phone_number"/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Email</label>
                                            <Field className="form-control" type="email" name="email"/>
                                            <small style={{color: "red"}}>{this.state.email_error_message}</small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label>Password</label>
                                            <Field className="form-control" type="password" name="password"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label>Birthdate</label>
                                            <Field className="form-control" type="date" name="birth_date"/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>NIC</label>
                                            <Field className="form-control" type="text" name="nic"/>
                                            <small style={{color: "red"}}>{this.state.nic_error_message}</small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label>Street address</label>
                                            <Field className="form-control" type="text" name='street_address'/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Street address 2</label>
                                            <Field className="form-control" type="text" name='street_address2' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-4">
                                            <label>State</label>
                                            <Field className="form-control" type="text" name='state'/>
                                        </div>
                                        <div className="form-group col-4">
                                            <label>City</label>
                                            <Field className="form-control" type="text" name='city'/>
                                        </div>
                                        <div className="form-group col-4">
                                            <label>Zip code</label>
                                            <Field className="form-control" type="text" name='zip_code'/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-control col-6">
                                            <label>Nationality</label>
                                            <Field as="select" className="form-control col-12" name="nationality">
                                                <option value='no_option'>Select</option>
                                                <option value='sinhala'>Sinhala</option>
                                                <option value='tamil'>Tamil</option>
                                            </Field>
                                        </div>
                                        <div className="form-control col-6">
                                            <label>Religion</label>
                                            <Field component="select" className="form-control col-12" name="religion" >
                                                <option value='no_option'>Select</option>
                                                <option value='buddist'>Buddist</option>
                                                <option value='catholic'>Catholic</option>
                                                <option value='hindu'>Hindu</option>
                                                <option value='islam'>Islam</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>    
                                <button type="submit" className="btn btn-lg btn-success">Next</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}

export default TeacherSignUpForm
