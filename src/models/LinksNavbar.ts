type OtherLinks = "contact" | "login";

interface Link {
  text: string;
}

interface LinksNavbar {
  links: Link[];
  otherLinks: Record<OtherLinks, Link>;
}

export default LinksNavbar;
