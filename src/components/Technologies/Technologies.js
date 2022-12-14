import React from 'react';
import {DiFirebase, DiIllustrator, DiNodejs, DiReact, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio et facilis harum ipsum iure quia quisquam vel! Architecto asperiores, autem, consequuntur deleniti ex libero molestiae molestias obcaecati pariatur quas unde.
      </SectionText>
      <List>
          <ListItem>
              <DiReact size={"3rem"} />
              <ListContainer>
                  <ListTitle>Front-end</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      React.js
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiNodejs size={"3rem"} />
              <ListContainer>
                  <ListTitle>Front-end</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Node.js and Database
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiIllustrator size={"3rem"} />
              <ListContainer>
                  <ListTitle>UI/UX</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Figma/XD
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
