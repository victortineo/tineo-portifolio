import { Link } from "gatsby";
import React from "react";
import { Circle } from "../components/Icons";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Info = () => {
  return (
    <Layout>
      <Seo title="Victor Tineo - About me" />
      <div className="container mx-auto xl:px-32 text-center lg:text-left">
      <div className="grid lg:grid-cols-2 flex items-center flex-1">
        <div className="mb-12 lg:mb-0">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
            style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}>
            <h2 className="text-3xl font-bold mb-6">6+ years of experience</h2>
            <p className="text-gray-500 mb-0 lg:pb-0">
              Hey, I'm Victor and I'm a front-end engineer. 
            </p>
            <p className="text-gray-500 mb-0 lg:pb-0">
              🌎 I'm Brazilian and currently working for a US based clients.
            </p>
            <p className="text-gray-500 lg:pb-0">
              Over 6 years working with JavaScript and creating amazing UI's.
            </p>

            <div className="grid grid-cols-3 mb-2 mx-auto">
              <p className="flex items-center mb-2 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <Circle />
                React
              </p>

              <p className="flex items-center mb-2 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <Circle />
                Javascript
              </p>

              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <Circle />
                HTML/CSS
              </p>

              <p className="flex items-center mb-2 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <Circle />
                Mobile Development
              </p>

              <p className="flex items-center mb-2 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                <Circle />
                Testing
              </p>

              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <Circle />
                Performance
              </p>
              
            </div>

            <p className="text-gray-500 mb-1">
              In the last 6 years I've discovered a passion: bringing ideas into amazing UIs.
              I've worked on all kinds of environments from start ups in their very begginings to gigantic companies with over 40 thousand people.
              I very good to adapt myself and understand the problems that a project or product might have.
            </p>
            <p className="text-gray-500">
              Wanna know more me? Take a look at <Link>projects that I've worked at</Link> and <Link to="/resume">my resume</Link>
            </p>
          </div>
        </div>

        <div>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/117.jpg" className="w-full rounded-lg shadow-lg"
            alt="" />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Info