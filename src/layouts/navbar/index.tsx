import { Container, ContainerCTA, ContainerLinks } from "./elements";
import Button from "@/shared/button";
import LinkText from "@/shared/copies/linkText";
import Branch from "@/shared/branch";

const Navbar = ({ linkInfo }) => {
  return (
    <Container>
      <ContainerLinks>
        <Branch />
        {linkInfo.links.map(({ text }) => (
          <LinkText
            key={text}
            textLink={text}
          />
        ))}
      </ContainerLinks>
      <ContainerCTA>
        <Button textButton={linkInfo.otherLinks.contact.text} />
        <LinkText textLink={linkInfo.otherLinks.login.text} />
      </ContainerCTA>
    </Container>
  );
};

export default Navbar;
