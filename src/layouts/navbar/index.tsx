import { Container, ContainerCTA, ContainerLinks, LinkText } from "./elements";
import SecondaryButton from "@/shared/buttons/secondary";
import Branch from "@/shared/branch";

const Navbar = ({ linkInfo }) => {
  return (
    <Container>
      <ContainerLinks>
        <Branch />
        {linkInfo.links.map(({ text }) => (
          <LinkText
            key={text}
            href={"/"}
            showdesktop
          >
            {text}
          </LinkText>
        ))}
      </ContainerLinks>
      <ContainerCTA>
        <SecondaryButton textButton={linkInfo.otherLinks.contact.text} />
        <LinkText
          href={"/"}
          showdesktop
        >
          {linkInfo.otherLinks.login.text}
        </LinkText>
      </ContainerCTA>
    </Container>
  );
};

export default Navbar;
