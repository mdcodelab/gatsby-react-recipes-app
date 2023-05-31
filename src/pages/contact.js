import React from "react";
import Layout from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import SEO from "../components/SEO";


const Contact = () => {
  const data = useStaticQuery(query);
  //console.log(data.allContentfulRecipe.nodes);

  return (
    <Layout>
    <SEO title="Contact"></SEO>
      <main className="page">
        <section className="contact-container">
          <article className="info">
            <h3>Want to get in touch?</h3>
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
            <form
              className="form contact-form"
              action="https://formspree.io/f/mayzzglq"
              method="POST">
              <div className="form-row">
                <label htmlFor="name" className="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                ></input>
              </div>
              <div className="form-row">
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                ></input>
              </div>
              <div className="form-row">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  id="message"
                  className="form-textarea"
                ></textarea>
                <button type="submit" className="btn btn-block">
                  Submit
                </button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look At These Awesome Recipes!</h5>
          <div className="featured-list">
            {data.allContentfulRecipe.nodes.map((recipe) => {
              const { id, title, image, prepTime, cookTime } = recipe;
              const slug = slugify(title, { lower: true });

              return (
                <Link key={id} to={`/${slug}`} className="featured-recipe">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={title}
                    className="featured-recipe-img"
                  />
                  <h5>{title}</h5>
                  <p>
                    Prep: {prepTime} min | Cook: {cookTime} min
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
};

const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default Contact;
