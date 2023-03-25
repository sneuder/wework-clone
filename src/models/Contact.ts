interface Contact {
  header: string;
  description: string;
  urlImage: string;
  inputs: {
    type: string;
    input: string;
    label: string;
  }[];
}

export default Contact;
