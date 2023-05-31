import * as React from "react"
import {Link} from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Gallery from "../components/Gallery";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";


export default function Home() {
  return (
    <Layout>
    <SEO title="Home Page" description="This is the home page"></SEO>
      <main className="page">
        <header className="hero">
          <div className="main-hero">
            <div className="image-hero"></div>
            <h2 className="fade-in">Your Recipes Heaven</h2>
            <h4 className="fade-in">No Fluff, just Recipes</h4>
          </div>
        </header>
      </main>
      <AllRecipes></AllRecipes>
    </Layout>
  );
}

