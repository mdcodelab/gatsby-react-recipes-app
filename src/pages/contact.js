import React from 'react';
import Layout from '../components/Layout';

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-container">
          <article className="info">
            <h3>Want to get in touch</h3>
            <p>
              If you have any questions or concerns, please don't hesitate to
              reach out to us. Our friendly customer support team is available
              to assist you via phone, email.
            </p>
            <p>
              We value your feedback and appreciate hearing from our customers.
              If you have any suggestions for how we can improve our products or
              services, we would love to hear them.
            </p>
            <p>
              For media inquiries or partnership opportunities, please contact
              our marketing department. We are always open to collaborating with
              like-minded businesses and organizations to achieve our shared
              goals.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name" className="form-label">Your mane</label>
                <input type="text" name="name" id="name" className="form-input"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email" className="form-label">Your email</label>
                <input type="email" name="email" id="email" className="form-input"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea cols="30" roes="10" name="message" id="message" className="form-textarea"></textarea>
                <button type="submit" className="btn btn-block">Submit</button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}



export default contact;
