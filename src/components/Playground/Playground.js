import React from "react";
import {
  PlaygroundProjectContainer,
  StyledPlayground,
} from "../styles/Playground.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import PlaygroundProjectComponent from "./PlaygroundProject";
import { projectsData } from "./data";

const Playground = () => {
  return (
    <StyledPlayground id="blogs">
      <SectionHeading>
        <SectionTitle number="03">Blogs</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        A collection of blogs that I've written while learning and building projects.
      </StyledParagraph>
      <PlaygroundProjectContainer>
        {projectsData.map((project) => {
          return <PlaygroundProjectComponent key={project.id} {...project} />;
        })}
      </PlaygroundProjectContainer>
    </StyledPlayground>
  );
};

export default Playground;
