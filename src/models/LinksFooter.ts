type Links = "company" | "support" | "partnership";

interface LinksFooter {
  number: string;
  copyright: string;
  info: string[];
  settings: string[];
  linksPages: Record<
    Links,
    {
      header: string;
      links: {
        text: string;
      }[];
    }
  >;
}

export default LinksFooter;
