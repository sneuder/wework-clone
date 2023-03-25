import { Container, socialBranches, socialBranch } from "./elements";

const SocialNetwork = () => {
  return (
    <Container>
      {socialBranches.map((branch, index) => {
        const Icon = socialBranch(branch);
        return <Icon key={index} />;
      })}
    </Container>
  );
};

export default SocialNetwork;
