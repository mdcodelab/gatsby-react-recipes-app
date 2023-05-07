import React from 'react';
import Layout from '../components/Layout';
import styled from "styled-components";
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <Layout>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>Discover Delicious Recipes with Us</h2>
              <p>We are a team of food enthusiasts who share a love for cooking
                and creating delicious recipes. Our goal is to provide our
                readers with a wide range of recipe options to suit all tastes
                and skill levels.</p>
              <p>We believe that cooking should be a fun and enjoyable experience
                for everyone, which is why we aim to make our recipes easy to
                follow and accessible. Whether you're a beginner or a seasoned
                chef, our recipes will inspire and encourage you to
                try new flavors and techniques.</p>
              <p>We hope that we bring joy and excitement to your cooking adventures!</p>
              <Link to="/contact" className="btn">Contact</Link>
            </article>
            <StaticImage src="../assets/img/about.jpg" alt="about" className="about-img"
            placeholder="blured"
            ></StaticImage>
          </section>
        </main>
    </Layout>
  );
}


export default About;
