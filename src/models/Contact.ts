export interface Input {
  type: string;
  input: string;
  label: string;
}

export interface InputGroup extends Input {
  groups: {
    [key: string]: {
      value: string;
      label: string;
    }[];
  };
}

interface Contact {
  header: string;
  description: string;
  urlImage: string;
  inputs: Input[] | InputGroup[];
}

export default Contact;
