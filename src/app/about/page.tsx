import Image from 'next/image';
import React from 'react'
import me from "@/../public/me.jpg";

function About() {
  const techs = [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "JavaScript",
  ];

  return (
    <div className="py-8 bg-background flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-0 sm:py-8 
        bg-transparent sm:bg-zinc-950 sm:rounded-2xl sm:shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0">
          <div className="w-full md:w-4/10 flex flex-col items-center order-1 md:order-none">
            <Image
              src={me}
              width={192}
              height={192}
              priority
              alt="João Paulo Freitas Queiroz"
              className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 shadow-lg object-cover"
            />
            <h4 className="text-xl font-semibold text-center text-gray-100">João Paulo Freitas Queiroz</h4>
            <p className="py-4 text-center text-neutral-300">Desenvolvedor Fullstack</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2 max-w-xs sm:max-w-sm">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="border border-neutral-700 rounded-md px-3 py-1 text-xs text-neutral-200 bg-neutral-800 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-6/10 flex items-center justify-center order-2 md:order-none">
            <div className="hidden sm:block sm:text-base md:text-lg max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100 text-center">Sobre Mim</h3>
              Sou João Paulo Freitas Queiroz, desenvolvedor Fullstack formado em Engenharia de Software pela Universidade Federal do Ceará (UFC - Quixadá). Tenho experiência no desenvolvimento de aplicações web e mobile, com foco em criar soluções intuitivas, performáticas e escaláveis.
              <br /><br />
              Atuei como desenvolvedor Fullstack no Núcleo de Práticas em Informática (NPI), onde trabalhei em projetos reais utilizando tecnologias como Vue.js, TypeScript, Java, Spring Boot, PostgreSQL e Docker. Também fui bolsista do Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI), desenvolvendo uma ferramenta web para apoiar o ensino de refatoração de Test Smells.
              <br /><br />
              Ao longo da graduação, participei de diversos projetos integrados, criando aplicações desktop, web e mobile com tecnologias como Java, Vue, TypeScript, Next e React. Tenho certificações em metodologias ágeis pelo PMI e nível avançado de inglês (C1) certificado pela EF SET.
              <br /><br />
            </div>
            <div className="block sm:hidden text-base max-w-md mx-auto text-neutral-200 text-center px-1">
              Olá! Sou João Paulo, desenvolvedor fullstack especializado em criar soluções web e mobile modernas. Tenho experiência com React, Next.js, Vue, Java, Spring Boot e mais. 
              <br /><br />
              Já atuei em projetos reais usando tecnologias atuais, sempre buscando entregar aplicações práticas, rápidas e fáceis de usar. Também tenho experiência acadêmica e certificações em metodologias ágeis e inglês avançado.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About