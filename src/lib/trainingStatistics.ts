const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

type DataSet = {
  label: string;
  data: number[];
  backgroundColor: string;
};

type Data = {
  labels: string[];
  datasets: DataSet[];
};

type Map = {
  [id: string]: number;
};

const emptyDataSet: DataSet = {
  label: "Training activity minutes",
  data: [],
  backgroundColor: "#4242e7",
};

const emptyData: Data = {
  labels: [],
  datasets: [emptyDataSet],
};

const arrToMap = (arr: any, stats: Map): Map => {
  arr.forEach((o: any) => {
    let { a, d } = { a: o.activity, d: parseInt(o.duration) };
    !Object.keys(stats).includes(a)
      ? (stats[a] = d)
      : (stats[a] = stats[a] + d);
  });
  return stats;
};

const getTrainingStatistics = (arr: any): Data => {
  const map: Map = arrToMap(arr, {});
  const dataSet: DataSet = { ...emptyDataSet, data: Object.values(map) };
  return { labels: Object.keys(map), datasets: [dataSet] };
};

export { options, emptyData, getTrainingStatistics };

export type { Data };
