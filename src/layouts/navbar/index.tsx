import {
  Container,
  ContainerCTA,
  ContainerLinks,
  LinkText,
  Menu,
} from "./elements";

import Button from "@/shared/button";
import Branch from "@/shared/branch";

import LinksNavbar from "@/models/LinksNavbar";

interface NavbarProps {
  linkInfo: LinksNavbar;
}

const Navbar = ({ linkInfo }: NavbarProps) => {
  return (
    <Container>
      <ContainerLinks>
        <Menu />
        <Branch />
        {linkInfo.links.map(({ text }) => (
          <LinkText
            key={text}
            href={"/"}
            showdesktop={"true"}
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
          showdesktop={"true"}
        >
          {linkInfo.otherLinks.login.text}
        </LinkText>
      </ContainerCTA>
    </Container>
  );
};

export default Navbar;
