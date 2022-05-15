import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2>CONTACT US</h2>
          </div>
          <div class="contact-form-wrapper">
            <form>
              <div class="form-item">
                <input type="text" name="sender" required placeholder="Name" />
              </div>
              <div class="form-item">
                <input
                  type="text"
                  name="email"
                  required
                  mail
                  placeholder="Email"
                />
              </div>
              <div class="form-item">
                <textarea
                  class=""
                  name="message"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
              <button class="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
