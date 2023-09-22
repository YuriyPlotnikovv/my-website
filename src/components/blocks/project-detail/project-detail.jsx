import { ProjectDataDescriptionStyled, ProjectDataListStyled, ProjectDataTitleStyled, ProjectHeadingWrapperStyled, ProjectLinksBlockStyled, ProjectStyled, ProjectWrapperStyled } from './style';
import Title from '../../ui/title/title';
import React from 'react';
import Button from '../../ui/button/button';

export default function ProjectDetail({features, deploy, repository}) {
  return (
    <ProjectStyled>
      <ProjectWrapperStyled>
        <ProjectHeadingWrapperStyled>
          <Title level='2' size='small'>Особенности проекта:</Title>
        </ProjectHeadingWrapperStyled>
          <ProjectDataListStyled>
          {features.map((item) => (
              <React.Fragment key={item.id}>
                <ProjectDataTitleStyled>{item.name}:</ProjectDataTitleStyled>
                <ProjectDataDescriptionStyled>{item.description}</ProjectDataDescriptionStyled>
              </React.Fragment>
                ))}
        </ProjectDataListStyled>
        <ProjectHeadingWrapperStyled>
          <Title level='2' size='small'>Ссылки:</Title>
        </ProjectHeadingWrapperStyled>
        <ProjectLinksBlockStyled>
          <Button href={deploy} >Деплой проекта</Button>
          <Button href={repository} >GitHub проекта</Button>
        </ProjectLinksBlockStyled>
      </ProjectWrapperStyled>
    </ProjectStyled>
  )
}
