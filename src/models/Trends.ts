interface Trend {
  tag: string;
  urlImage: string;
  header: string;
  description: string;
}

interface Trends {
  tag: string;
  header: string;
  direction: string;
  mainTrend: Trend;
  trends: Trend[];
}

export default Trends;
