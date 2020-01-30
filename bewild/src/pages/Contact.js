import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import Gif from '../pictures/gif-contact2.gif';

import ContactSelect from './ContactSelect';


import '../css/Contact.css';


class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      firstname: '',
      email: '',
      subject: '',
      message: '',
      order: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message, order, firstname } = this.state;
    let templateParams = {
      from_name: email,
      to_name: name,
      subject: subject,
      message_html: message,
      order: order,
      firstname: firstname
    };
    emailjs.send('gmail', 'template_f0X8fBD2', templateParams, ' user_uyZjVEA8foEnFj9bPAgnH');
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      order: '',
      firstname: ''
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div>
        <div classname="banniere">
            C O N T A C T
        </div>
        <div className="contact-text">
          <p className="contact-text-title">ENVOYEZ-NOUS UN MAIL</p>
        </div>
        
        <form className="container-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="container-warning">
          <p className="contact-text-bottom">
            Envoyez - nous vos projets artistiques afin de le partager à la communauté des WILDERS.
            Une vidéo, une musique, un graffiti, une chorégraphie, ..., à vos claviers les "WILD'ARTIST".
          </p>
          <img className="gif-contact" src={Gif} alt="gif-contact" />
        </div>
          <div className="contactform">
            <div className="names">
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="N o m"
            />
            <input
              type="text"
              name="name"
              value={this.state.firstname}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'firstname')}
              placeholder="P r é n o m"
            />
            </div>
            <div className="mail-artist">
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, 'email')}
              placeholder="E - m a i l"
            />
            <input
              type="name"
              placeholder="N o m  d ' a r t i s t e"
              name="order"
              className="text-primary"
              value={this.state.order}
              onChange={this.handleChange.bind(this, 'order')}
            />
            </div>
            <div className="selectors">
            {/* <div className="obj">Objet</div> */}
            <ContactSelect
              type="name"
              placeholder="C h o i s i r"
              name="order"
              className="text-primary"
              value={this.state.order}
              onChange={this.handleChange.bind(this, 'order')}
            /> 

            <div className="button-wrapper">
              <span className="label">T E L E C H A R G E R</span>
              <input type ="file"
              name="upload"
              id="upload"
              className="upload-box"
              placeholder="Upload"/>
            </div>
            </div>
            <textarea
              className="textarea text-primary"
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
              placeholder="V o t r e  m e s s a g e"
            />
            <div className="buttons-container">
              <button
                className="button-send"
                type="submit"
                onClick={() => this.handleSubmit.bind(this)}
              >
                V A L I D E R
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;