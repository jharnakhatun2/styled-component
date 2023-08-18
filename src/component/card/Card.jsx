import {
  ButtonContainer,
  Container,
  DisplayContainer,
  TextContainer,
} from "../../assets/style/Container.style";
import { Button, H1, Image, SVG } from "../../assets/style/Element.style";

export default function Card() {
  return (
    <Container>
      <DisplayContainer>
        <TextContainer>
          <H1>Beautiful and Cute Rabbit for any device</H1>
          <ButtonContainer>
            <Button>Start designing</Button>
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
            </SVG>
          </ButtonContainer>
        </TextContainer>
        <Image src="/src/assets/images/1.PNG" alt="image" />
      </DisplayContainer>
    </Container>
  );
}
