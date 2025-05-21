/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TechWrapper from '../components/TechWrapper'
// import me from '@/../public/me.jpg'

function About() {
  return (
    <div className='py-8 bg-gray-100 dark:bg-gray-800'>
      <div className=" flex justify-evenly">
        <div className='w-md'>
          <img
            src={"https://avatars.githubusercontent.com/u/102546648?v=4"}
            alt="João Paulo Freitas Queiroz"
            className="rounded-full w-48 h-48 mx-auto mb-4 shadow-lg"
          />
          <h4 className="text-xl font-semibold text-center text-gray-900 dark:text-white">João Paulo Freitas Queiroz</h4>
          <p className="py-4 text-center text-gray-700 dark:text-gray-300">Desenvolvedor Fullstack</p>
          <TechWrapper />
        </div>
        <div className=" flex items-center justify-center">
          <div className="sm:text-base md:text-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">Sobre Mim</h3>
            Sou João Paulo Freitas Queiroz, desenvolvedor Fullstack formado em Engenharia de Software pela Universidade Federal do Ceará (UFC - Quixadá). Tenho experiência no desenvolvimento de aplicações web e mobile, com foco em criar soluções intuitivas, performáticas e escaláveis.
            <br /><br />
            Atuei como desenvolvedor Fullstack no Núcleo de Práticas em Informática (NPI), onde trabalhei em projetos reais utilizando tecnologias como Vue.js, TypeScript, Java, Spring Boot, PostgreSQL e Docker. Também fui bolsista do Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI), desenvolvendo uma ferramenta web para apoiar o ensino de refatoração de Test Smells.
            <br /><br />
            Ao longo da graduação, participei de diversos projetos integrados, criando aplicações desktop, web e mobile com tecnologias como Java, Vue, TypeScript, Next e React. Tenho certificações em metodologias ágeis pelo PMI e nível avançado de inglês (C1) certificado pela EF SET.
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About