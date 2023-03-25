export interface Solution {
  header: string;
  description: string;
  urlImage: string;
}

interface Solutions {
  header: string;
  direction: string;
  solutions: Solution[];
}

export default Solutions;
