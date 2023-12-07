import React from 'react'
import WyzeHMS from './images/projects/wyze-hms.jpg'
import QueroCasamento from './images/projects/quero-casament.gif'
import ColabEvent from './images/projects/colab-event.jpg'
import ColabConsultas from './images/projects/colab-consultas.jpg'
import MundoSenai from './images/projects/mundosenai.jpg'
import MestreConstrutor from './images/projects/mestre-construtor.jpg'
import EvoluiContabilidade from './images/projects/evolui-contabilidade.jpg'

export const projects = [
  {
    image: WyzeHMS,
    tag: "Full Project",
    title: "Wyze Services - Purchase Flow",
    description: <>
      <p>I was the main frontend developer of the project, I worked in two main fronts: user account page with subscription management, payment details and purchase flows for Home Monitoring System (HMS).</p>
    </>,
    link: "https://prod.services.wyze.com/ "
  },
  {
    image: QueroCasamento,
    tag: "Animation and UI",
    title: "Quero de Casamento - Opening Scene",
    description: <>
      <p>The "entrance" to a weddng wishlist was a really interesting project to be a part of and something really different to work with</p>
    </>,
    link: "https://prod.services.wyze.com/ "
  },
  {
    image: ColabEvent,
    tag: "Architecture and Components",
    title: "Colab.re social media",
    description: <p>I was the lead frontend of the project, I created the architecture and a good chunk of the components used in it, as well as handling state management and sessions</p>,
    link: "https://app.colab.re/event/410664",
  },
  {
    image: ColabConsultas,
    tag: "State and UI",
    title: "Colab.re consultas",
    description: <p>
      I was responsible for creating the save state for the survey. Not only the implementation of the frontend, but also discussions with backend in order to find the best approach.
    </p>,
    link: "https://consultas.colab.re/",
  },
  {
    image: MundoSenai,
    tag: "Frontend",
    title: "Portal Mundo Senai",
    description: <p>
      I was a part of the team who built it. It was one of my first free lances and was a very interesting opportunity as I didn't knew how to work with their technologies. I had to quickly adapt and learn new skills on a daily basis. You can check it at the Behance profile of Weef Interativa.
    </p>,
    link: "https://www.behance.net/gallery/84847085/Mundo-Senai"
  },
  {
    image: MestreConstrutor,
    tag: "Landing Page",
    title: "Mestre Construtor",
    description: <p>
      A simple landing page built within half a day. It was a cool chance to learn some new technologies as I was trying a few different approaches with this project.
    </p>,
    link: "https://mestreconstrutor.blog.br/ - Mestre Construtor - Landing Page"
  },
  {
    image: EvoluiContabilidade,
    tag: "Landing Page",
    title: "Evolui Contabilidade",
    description: <p>
      My latest project, a simple landing page for a contability company. I used it as a opportunity to learn more about frameworks like tailwindcss
    </p>,
    link: "https://evoluicontabilidade.com.br/",
  }
]