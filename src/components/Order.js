import React from 'react';
import '../assets/css/order.css';
import axios from 'axios';
import { endpoint } from '../core/config';

class Order extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            status: 'normal',
            name: '',
            company_name: '',
            email: '',
            phone: '',
            vehicle_make_model: '',
            vehicle_type: '',
            wash_package: '',
            date: '',
            subject: '',
            message: '',
        };
    } 

    componentDidMount() {}

    order() {
        this.setState({ loading: true });

        const order = {
            name: this.state.name,
            company_name: this.state.company_name,
            email: this.state.email,
            phone: this.state.phone,
            vehicle_make_model: this.state.vehicle_make_model,
            vehicle_type: this.state.vehicle_type,
            wash_package: this.state.wash_package,
            date: this.state.date,
            subject: this.state.subject,
            message: this.state.message,
          };

        axios.post(`${endpoint}/order/add-order.php`, { order })
        .then(res => {
            console.log(res);

            if (res.data == "success") {
                this.setState({ status: 'success' });
                this.setState({ loading: false });
            }
            else {
                this.setState({ status: 'failed' });
                this.setState({ loading: false });
            }
        })

    }

    onchange(event) {
        if (event.target.name == 'name') this.setState({ name: event.target.value });
        else if (event.target.name == 'company_name') this.setState({ company_name: event.target.value });
        else if (event.target.name == 'email') this.setState({ email: event.target.value });
        else if (event.target.name == 'phone') this.setState({ phone: event.target.value });
        else if (event.target.name == 'vehicle_make_model') this.setState({ vehicle_make_model: event.target.value });
        else if (event.target.name == 'vehicle_type') this.setState({ vehicle_type: event.target.value });
        else if (event.target.name == 'wash_package') this.setState({ wash_package: event.target.value });
        else if (event.target.name == 'date') this.setState({ date: event.target.value });
        else if (event.target.name == 'subject') this.setState({ subject: event.target.value });
        else if (event.target.name == 'message') this.setState({ message: event.target.value });

        console.log(this.state);
      }

    render() {
        return(
            <section>
                <div className="main-oder">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12">
                                <h1 className="text-center">Order</h1>

                                <div className="seprator mt-3"></div>
                            </div>

                        </div>
                    </div>
                </div>

                { this.state.status == 'normal' ?
                    <div className="input">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 col-md-6 col-lg-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={(e) => this.onchange(e)}></input>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <input type="text" name="company_name" className="form-control" placeholder="Company Name" onChange={(e) => this.onchange(e)}></input>

                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <input type="text" name="email" className="form-control" placeholder="Your E-mail *" onChange={(e) => this.onchange(e)}></input>
        
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <input type="text" name="phone" className="form-control" placeholder="Phone Number *" onChange={(e) => this.onchange(e)}></input>
            
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <input type="text" name="vehicle_make_model" className="form-control" placeholder="Vehicle Make and Model *" onChange={(e) => this.onchange(e)}></input>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <select className="form-control" name="vehicle_type" onChange={(e) => this.onchange(e)}>
                                        <option>Vehicle Type</option>
                                        <option>Regular Size Car</option>
                                        <option>Medium Size Car</option>
                                        <option>Compact SUV</option>
                                        <option>Minivan</option>
                                        <option>Pickup Truck</option>
                                        <option>Cargo Truck</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <select className="form-control" name="was_package" onChange={(e) => this.onchange(e)}>
                                        <option>Wash Packages</option>
                                        <option>Basic Hand Wash</option>
                                        <option>Deluxe Wash</option>
                                        <option>Ultimate Shine</option>
                                        <option>Platinum Works</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <input type="date" name="date" placeholder="date" onChange={(e) => this.onchange(e)}></input>
                                </div>

                                <div className="col-12 col-md-12 col-lg-12">
                                    <input type="text" name="subject" className="form-control" placeholder="Subject *" onChange={(e) => this.onchange(e)}></input>
                                </div>

                                <div className="col-12 col-md-12 col-lg-12">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Your Message" onChange={(e) => this.onchange(e)}></textarea>
                                </div>

                            </div>

                            <p className="pt-5 text-center">We will confirm your appointment with you by phone or e-mail within 24 hours of receiving your request.</p>

                            <div className="pt-5 text-center">
                                { !this.state.loading ?
                                    <a className="press" onClick={() => this.order()}>Confirm Booking</a>
                                    :
                                    <p>Loading ...</p>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

                { this.state.status == 'success' ?
                    <div className="success-section text-white my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-body bg-success">
                                            <h4 className="mb-2">Order Successfully Created</h4>
                                            <p>Our Team will contact you shortly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

                { this.state.status == 'failed' ?
                    <div className="success-section text-white my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-body bg-danger">
                                            <h4 className="mb-2">Order Failed</h4>
                                            <p>There's some glitch in system, try after some time, or book your order on call</p>
                                            <a className="btn btn-light mt-3" href="tel: +923312737076">Call Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

            </section>
        );
    }
}
export default Order;