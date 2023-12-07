import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const speechs = [
  '',
  "Hi, my name is Victor, and I'm a web developer",
  "Wanna know more about my work?",
  "Click the arrow bellow and take a look"
]

const IndexPage = () => {
  const [animating, setAnimate] = React.useState(false)
  const [speechStep, setSpeechStep] = React.useState(0)

  React.useEffect(() => {
    const handleSpeecStep = () => {
      if(speechStep === speechs.length - 1) return false
      setSpeechStep(e => e + 1)
    }
    let interval;
    if(speechStep !== speechs.length) {
      interval = setInterval(handleSpeecStep, 2000);
    }

    return () => {
      if(interval) return clearInterval(interval)
      return false
    }; 
  }, [speechStep])

  return (
    <Layout>
      <Seo title="Victor Tineo - A very good web developer" />
      <section className="max-w-5xl mx-auto flex items-start flex-wrap">
        <StaticImage
          src="../images/me-pixel-art.png"
          alt="me"
          placeholder="none"
          className="max-h-screen w-56 mb-auto"
        />
        <div className="relative">
          <p 
            key={speechStep} 
            className="font-semibold opacity-0 animate-home-balloon-text absolute font-mono text-lg z-10 left-1/2 top-1/2 w-3/5 translate-x-[calc(-50%_+_2rem)] -translate-y-[calc(50%_-_1rem)]">
            {speechs[speechStep] ?? speechs[-1]}
          </p>
          <StaticImage
            src="../images/bubbles/bubble-1.png"
            alt=""
            placeholder="none"
            className="animate-home-balloon opacity-0"
            />       
        </div>
        <div className="relative self-stretch flex-col justify-end flex">
          <Link to="/info">
            <StaticImage
              src="../images/arrow.png"
              alt=""
              placeholder="none"
              className={`animate-bounce ${speechStep === speechs.length - 1 ? '' : 'hidden'} bottom-0`}
            />
          </Link>
        </div>
        

      </section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
