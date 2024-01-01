import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Proyectos</Title>
        <Desc>
          Estos son los proyectos en los que eh trabajado a lo largo de mis cursados y estudios de programación:
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Todo</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Todo</ToggleButton>
          }
          <Divider />
          {toggle === 'appweb' ?
            <ToggleButton active value="appweb" onClick={() => setToggle('appweb')}>Aplicaciones Web</ToggleButton>
            :
            <ToggleButton value="appweb" onClick={() => setToggle('appweb')}>Aplicaciones Web</ToggleButton>
          }
          <Divider />
          {toggle === 'otros' ?
            <ToggleButton active value="otros" onClick={() => setToggle('otros')}>Otras Apps</ToggleButton>
            :
            <ToggleButton value="otros" onClick={() => setToggle('otros')}>Otras Apps</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects