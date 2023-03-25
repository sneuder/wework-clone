type Links = "company" | "support" | "partnership";

export interface LinkPages {
  header: string;
  links: {
    text: string;
  }[];
}

interface LinksFooter {
  number: string;
  copyright: string;
  info: string[];
  settings: string[];
  linksPages: Record<Links, LinkPages>;
}

export default LinksFooter;
