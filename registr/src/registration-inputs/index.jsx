import React from "react";
import spase from '../assets/image/spase.jpg';
import './style.scss';

class UserRegister extends React.Component {
    state = {
        formData: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phoneCode: '',
            phoneNum: '',
            password: '',
            confirmPassword: '',
        },
        errorData: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phoneCode: '',
            phoneNum: '',
            password: '',
            confirmPassword: '',
        }
    }

    onChangeInput = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }
    handleClick = () => {
        const { formData } = this.state
        const newErrorData = {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phoneCode: '',
            phoneNum: '',
            password: '',
            confirmPassword: ''
        }
        const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!formData.firstName.trim().length) {
            newErrorData.firstName = 'Fill a firstname'
        }
        if (!formData.lastName.trim().length) {
            newErrorData.lastName = 'Fill a lastname'
        }
        if (!formData.company.trim().length) {
            newErrorData.company = 'fill a company'
        }
        if (!formData.email.trim().length) {
            newErrorData.email = 'Fill an Email'
        } else if (!validMail.test(formData.email)) {
            newErrorData.email = 'Fill a correct Email'
        }

        if (!formData.phoneCode.trim().length) {
            newErrorData.phoneCode = 'Fill a code'
        }
        if (!formData.phoneNum.trim().length) {
            newErrorData.phoneNum = 'Fill a number'
        }
        if (!formData.password.trim().length) {
            newErrorData.password = 'Fill a password'
        }
        if (formData.password.trim().length && formData.password.trim().length < 8) {
            newErrorData.password = 'Fill a password with 8 symbol'
        }
        if (!formData.confirmPassword.trim().length) {
            newErrorData.confirmPassword = 'Fill a password'
        } else if (formData.password.trim() !== formData.confirmPassword.trim()) {
            newErrorData.confirmPassword = 'Fill a same password'
        }
        this.setState({ errorData: newErrorData })
        if (!newErrorData.firstName && !newErrorData.lastName && !newErrorData.company && !newErrorData.email && !newErrorData.phoneCode && !newErrorData.phoneNum
            && !newErrorData.password && !newErrorData.confirmPassword) {
            //alert('Congratulations!!! You have registered')

        }
    }
    render() {
        const { formData, errorData } = this.state
        // grum enq, vor heto greladzev krchatvi
        return <section className="bg-cover" style={{ backgroundImage: `url(${spase})` }}>
            <div className="G-container">
                <div className="input-part">
                    <div className="title">
                        <h2>REGISTER</h2>
                    </div>
                    <div className="G-flex">
                        {/* inputy petq e unena
                        name, value, placeholder, onCHange, className, type                                   */}
                        <label >Name
                            <input name="firstName" value={formData.firstName}
                                onChange={this.onChangeInput}
                                className={`'firstName' ${errorData.firstName ? 'error-input firstName' : ''}`}  // nor greladzev
                                type="text" placeholder="First Name"
                            />
                            {errorData.firstName ? <p>{errorData.firstName}</p> : null}
                        </label>
                        <label >
                            <input name="lastName" value={formData.lastName}
                                onChange={this.onChangeInput} className={`${errorData.lastName ? 'error-input lastName' : 'lastName'}`} type="text" placeholder="Last Name" />
                            {errorData.lastName ? <p>{errorData.lastName}</p> : null}
                        </label>
                    </div>
                    <label > Company
                        <input name="company" value={formData.company}
                            onChange={this.onChangeInput} type="text" className={`${errorData.company ? 'error-input ' : null}`} />
                        {errorData.company ? <p>{errorData.company}</p> : null}
                    </label>
                    <label > Email
                        <input name="email" onChange={this.onChangeInput} value={formData.email} className={`${errorData.email ? 'error-input ' : null}`} type="email" />
                        {errorData.email ? <p>{errorData.email}</p> : null}
                    </label>
                    <div className="G-flex">
                        <label > Phone
                            <input name="phoneCode" onChange={this.onChangeInput} value={formData.phoneCode} className={`${errorData.phoneCode ? 'error-input phoneCode' : 'phoneCode'}`} type="number" placeholder="Area Code" />
                            {errorData.phoneCode ? <p>{errorData.phoneCode}</p> : null}
                        </label>
                        <label >
                            <input name="phoneNum" onChange={this.onChangeInput} className={`${errorData.phoneNum ? 'error-input phoneNum' : 'phoneNum'}`} value={formData.phoneNum} type="number" placeholder="Phone Number" />
                            {errorData.phoneNum ? <p>{errorData.phoneNum}</p> : null}
                        </label>
                    </div>
                    <label > Password
                        <input name="password" onChange={this.onChangeInput} value={formData.password} className={`${errorData.password ? 'error-input ' : null}`} type="password" />
                        {errorData.password ? <p>{errorData.password}</p> : null}
                    </label>
                    <label > Confirm Password
                        <input name="confirmPassword" onChange={this.onChangeInput} value={formData.confirmPassword} className={`${errorData.confirmPassword ? 'error-input ' : null}`} type="password" />
                        {errorData.confirmPassword ? <p>{errorData.confirmPassword}</p> : null}
                    </label>
                    <div className="radio-input-part">
                        <h3>Are you an existing customer?</h3>
                        <div className="G-flex">
                            <label > Yes
                                <input type="radio" className="radio" name="radio1" />
                            </label>
                            <label> No
                                <input type="radio" className="radio" name="radio1" />
                            </label>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={this.handleClick}>Register</button>
                    </div>
                </div>

            </div>

        </section>
    }
}
export default UserRegister