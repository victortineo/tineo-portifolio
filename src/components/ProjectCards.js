import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import './ProjectCard.css'

export const ProjectCard = ({
  title,
  desc,
  subtitle,
  subdescription,
  cards
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
          <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
          <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center">
              <div slot="middle-left" className="max-w-2xl">
                  <div className="flex flex-row">
                      <div className="w-2/3 bg-mainPurple p-5 text-white flex justify-center items-center h-48 text-3xl font-black uppercase">{title}</div>
                      <div className="w-1/3 bg-mainPink text-white p-5 flex justify-center items-center">{desc}</div>
                  </div>
              </div>
          </div>
          <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
          <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center">
              <div slot="middle-right" className="max-w-xs">
                  <div className="flex flex-col justify-center h-48 p-3">
                      <div className="text-xl font-black text-mainPink">{subtitle}</div>
                      <div className="text-sm my-3">{subdescription}</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="grid grid-cols-3 p-12 gap-5">
        {cards.map(card => (
          <div key="title" className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2">
              <div slot="bottom-left" className="h-full max-w-xs">
                  <div className="h-full p-5 shadow-md m-2 mt-4 bg-white rounded-xl">
                      <div className='project_card__container'>
                        <img className="object-scale-down" src={card.image} alt={card.title} />
                      </div>
                      <div className="text-xs font-bold uppercase text-mainPink mt-1 mb-2">{card.tag}</div>
                      <div className="text-xl font-bold mb-2 text-mainPurple">{card.title}</div>
                      <div className="">{card.description}</div>
                      <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-sm text-mainPink cursor-pointer">Learn More</a>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

