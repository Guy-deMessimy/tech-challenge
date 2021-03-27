import React, { Component } from "react";
import "./style.scss";

/**
 * @param {string} url_API
 */

const url_API = "https://post-a-form.herokuapp.com/api/employees"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname:"",
      email: "",
      message: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state)
  };

  onSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    const url = url_API;
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Kingdom #${res} has been successfully contacted!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when contacted the Kingdom.");
      });
  };

  render() {
    return (
      <div className="FormKingdom">
        <h1>Contact the Royal Kingdom</h1>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-data">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-data">
              <label HtmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="33"
                value={this.state.message}
                onChange={this.onChange}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Contact;
