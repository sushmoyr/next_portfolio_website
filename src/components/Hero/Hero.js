import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row padding>
      <LeftSection>
          <SectionTitle main center>
              Welcome To <br/>
              My Personal Portfolio
          </SectionTitle>
          <SectionText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto beatae inventore modi veritatis? Fuga laborum perferendis provident quaerat tempore velit. Aperiam magni modi odio optio quas quos reiciendis tempora?
          </SectionText>
          <Button onClick = {() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>

  </Section>
);

export default Hero;
