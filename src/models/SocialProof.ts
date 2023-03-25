interface SocialProof {
  header: string;
  description: string;
  direction: string;
  companies: {
    urlImage: string;
  }[];
}

export default SocialProof;
