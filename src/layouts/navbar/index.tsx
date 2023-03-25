import {
  Container,
  ContainerCTA,
  ContainerLinks,
  LinkText,
  Menu,
} from "./elements";

import Button from "@/shared/button";
import Branch from "@/shared/branch";

const Navbar = ({ linkInfo }) => {
  return (
    <Container>
      <ContainerLinks>
        <Menu />
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
        <Button
          textButton={linkInfo.otherLinks.contact.text}
          buttonType={"secondary"}
        />
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
