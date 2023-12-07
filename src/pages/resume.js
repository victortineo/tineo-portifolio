import React, { useState } from "react";
import Layout from "../components/layout";
import { PillMain, Pill } from "../components/PIll";
import Seo from "../components/seo";

const Title = ({children, ...rest}) => <h2 {...rest} className="mb-0 font-semibold text-lg">{children}</h2>
const Text = ({children, ...rest}) => <h3 {...rest} className="mb-0 text-base">{children}</h3>
const SubTitle = ({children, ...rest}) => <p {...rest} className="mb-0">{children}</p>

const Content = ({ title, subtitle, children }) => {
  const [hide, setHide] = useState(false)
  const toggleHidden = () => setHide(e => !e)
  const hideArrow = () => <span className={`arrow ${hide ? 'arrow-right' : 'arrow-down'} ml-0.5 mb-0.5`}></span>
  return (<div className="mb-5">
    {title && <Title role="button" tabIndex={0} onClick={toggleHidden} onKeyPress={e => (e.key === 'Enter' || e.key === ' ') ? toggleHidden() : false}>{title} {hideArrow()}</Title>}
    {subtitle && <SubTitle role="button" tabIndex={0} onClick={toggleHidden} onKeyPress={e => (e.key === 'Enter' || e.key === ' ') ? toggleHidden() : false}>{subtitle} {hideArrow()}</SubTitle>}
    {hide ? null : <div className="ml-10">{children}</div>}
  </div>
  )
}

const Resume = () => {
  return (
    <Layout>
      <Seo title="Victor Tineo - Resume" />
      <section className="bg-white max-w-5xl mx-auto p-8">
        <h1 className="text-center uppercase font-bold text-xl mb-2">Victor Guilherme Tineo Inácio</h1>
        <p className="text-gray-500 w-full text-center max-w-none font-semibold text-lg">27/02/1995  -  São Paulo/SP – Brazil</p>

        <Content title="Contact Info">
          <Text>Phone: +55 {"("}11{")"} 97752-5653</Text>
          <Text>E-mail: victor.tineo141@gmail.com</Text>
          <Text>Github: <a href="//github.com/victortineo" rel="noopener noreferrer" target="_blank">github.com/victortineo</a></Text>
          <Text>Bitbucket: <a href="//bitbucket.org/victortineo" rel="noopener noreferrer" target="_blank">bitbucket.org/victortineo</a></Text>
          <Text>Linkedin: <a href="//linkedin.com/in/victortineo" rel="noopener noreferrer" target="_blank">linkedin.com/in/victortineo</a></Text>
        </Content>

        <Content title="Objectives">
          <Text>Front End Web and Mobile Development; </Text>
        </Content>

        <Content title="Experience">
          <Content subtitle="( 12/2021 - 10/2022 ) Wyze (US)">
            <Text>Front End Developer</Text>
            <Text>Develop and maintain Wyze Services, including purchase, license management and landing pages</Text>
            <Text>A fast paced team where I work to maintain a legacy environment and deliver new features to one with more up-to-date technology.</Text>
            <Text>Technologies: <PillMain>React</PillMain> <PillMain>Redux</PillMain> <PillMain>Typescript</PillMain> <Pill>GraphQL</Pill> <Pill>NextJS</Pill> <Pill>Styled Components</Pill></Text>
          </Content>
          
          <Content subtitle="( 07/2021 - 03/2022 ) STRV (Czech Republic)">
            <Text>Front End Developer</Text>
            <Text>Work as a consultant to different clients.</Text>
            <Text>Participate in discussions with clients' engineering team in order to align our project with their standards in order to use the same patterns, use the same libraries and SDKs, integrate APIs and technical discussions.</Text>
            <Text>Technologies: <PillMain>React</PillMain> <PillMain>Redux</PillMain> <PillMain>Typescript</PillMain> <Pill>GraphQL</Pill> <Pill>NextJS</Pill> <Pill>Stitches</Pill></Text>
          </Content>

          <Content subtitle="( 03/2020 - 07/2021 ) Magazine Luiza / Luiza Labs (BR)">
            <Text>Front End Developer</Text>
            <Text>Develop and Maintain Quero de Casamento functionalities, one of the top 3 wedding gift list app in Brazil.</Text>
            <Text>System Architecture, unit and integration tests.</Text>
            <Text>Technologies: <PillMain>React</PillMain> <PillMain>Redux</PillMain> <PillMain>Unit Testing</PillMain> <Pill>Jest</Pill> <Pill>React Testing Library</Pill> <Pill>Hooks</Pill> <Pill>GraphQL</Pill> <Pill>NextJS</Pill></Text>
          </Content>

          <Content subtitle="(04/2019 - 03/2020 ) Colab (BR)">
            <Text>Lead Front End Developer</Text>
            <Text>Develop and Maintain Colab Social Media App, elected by the New Cities Foundation the best urban app in the world.</Text>
            <Text>Develop and maintain a Saas platform.</Text>
            <Text>Manage intern developers</Text>
            <Text>Mobile development with React Native.</Text>
            <Text>Technologies: <PillMain>React</PillMain> <PillMain>Redux</PillMain> <PillMain>React Native</PillMain> <Pill>RestAPI</Pill> <Pill>NextJS</Pill></Text>
          </Content>

          <Content subtitle="(08/2018 - 04/2019 ) – Layer Up (BR)">
            <Text>Lead Front End Developer.</Text>
            <Text>Website development with Wordpress and React, legacy website maintenance, manage development team.</Text>
            <Text>Technologies: <PillMain>React</PillMain> <PillMain>Wordpress</PillMain> <PillMain>JQuery</PillMain> <Pill>SASS</Pill> <Pill>RestAPI</Pill></Text>
          </Content>

          <Content subtitle="(03/2018 - 06/2018) Weef Interativa (BR)">
            <Text>Front End Developer {"("}Contract{")"}</Text>
            <Text>Three month contract to work with the development of Portal Mundo Senai, a portal for one of the largest non-profit education organizations in Brazil. I helped build the majority of the UI and integration with clients backend APIs.</Text>
            <Text>Technologies: <PillMain>SCSS</PillMain> <PillMain>BackBone.js</PillMain> <PillMain>Javascript</PillMain> <Pill>Mustache Template</Pill> <Pill>JQuery</Pill></Text>
          </Content>

          <Content subtitle="(08/2017 -  01/2018) Bradoo Technologies (BR)">
            <Text>ERP Developer</Text>
            <Text>CRM and ERP development and customization using Odoo framework</Text>
            <Text>Technologies: <PillMain>Python</PillMain> <PillMain>Odoo</PillMain> <PillMain>GIT</PillMain> <Pill>Javascript</Pill> <Pill>Backbone.js</Pill> <Pill>Scrum</Pill> <Pill>XML</Pill></Text>
          </Content>

          <Content subtitle="(03/2017 - 08/2017) Agência D1Up (BR)">
            <Text>Frontend Developer</Text>
            <Text>Intern developer, helped building UI and drupal functions for clients websites;</Text>
            <Text>Technologies: <PillMain>HTML</PillMain> <PillMain>CSS</PillMain> <PillMain>Javascript</PillMain> <Pill>JQuery</Pill> <Pill>Drupal</Pill> <Pill>SCSS</Pill> </Text>
          </Content>

          <Content subtitle="(11/2016 - 01/2018) Agência MadGo (BR)">
            <Text>Frontend Developer</Text>
            <Text>Contract role to maintain wordpress applications during end of year promotions.</Text>
            <Text>Technologies: <PillMain>HTML</PillMain> <PillMain>CSS</PillMain> <PillMain>Javascript</PillMain> <Pill>JQuery</Pill> <Pill>Wordpress</Pill> <Pill>SCSS</Pill> </Text>
          </Content>
        </Content>

        <Content title="Soft Skills">
          <Text>Communication</Text>
          <Text>Problem solving</Text>
          <Text>Time management</Text>
          <Text>Independent</Text>
          <Text>Proactivity</Text>
        </Content>

        <Content title="Tech Skills">
          <Text>HTML5, CSS3, Bootstrap, SASS, CSS design patterns - BEM, SMACS</Text>
          <Text>Javascript, ES6, Typescript;</Text>
          <Text>React and React Native;</Text>
          <Text>Test Frameworks Mocha, Chai, React Testing Library, Enzyme, Jest.</Text>
          <Text>Material-ui;</Text>
          <Text>GIT and platforms (Github, bitbucket, gitlab…);</Text>

        </Content>
      </section>
    </Layout>
  )
}

export default Resume