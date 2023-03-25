import { ContainerPage, LinkPage, ContainerLinks } from "./elements";
import TextTag from "@/shared/textTag";
import { LinkPages } from "@/models/LinksFooter";

interface LinkPagesProps {
  pages: LinkPages;
}

const LinkPages = ({ pages }: LinkPagesProps) => {
  return (
    <ContainerPage>
      <TextTag headerLink={"true"}>{pages.header}</TextTag>
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
