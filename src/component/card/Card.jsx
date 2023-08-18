import {
  ButtonContainer,
  Container,
  DisplayContainer,
  TextContainer,
} from "../../assets/style/Container.style";
import { Button, H1 } from "../../assets/style/Element.style";
import "remixicon/fonts/remixicon.css";

export default function Card() {
  return (
    <Container>
      <DisplayContainer>
        <TextContainer>
          <H1>Beautiful and Cute Rabbit for any device</H1>
          <ButtonContainer>
            <Button>Start designing</Button>
            <div>
              <i className="ri-arrow-right-line"></i>
            </div>
          </ButtonContainer>
        </TextContainer>
        <img src="/src/assets/images/1.PNG" alt="image" />
      </DisplayContainer>
    </Container>
  );
}
