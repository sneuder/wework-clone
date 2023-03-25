import { ContainerPage, LinkPage, ContainerLinks } from "./elements";
import TextTag from "@/shared/textTag";

const LinkPages = ({ pages }) => {
  return (
    <ContainerPage>
      <TextTag headerlink>{pages.header}</TextTag>
      <ContainerLinks>
        {pages.links.map((pageLink) => (
          <LinkPage
            href={"/"}
            key={pageLink.text}
          >
            {pageLink.text}
          </LinkPage>
        ))}
      </ContainerLinks>
    </ContainerPage>
  );
};

export default LinkPages;
