// the bare minimum for a non-interactive bar chart with one data set
import {
    BarElement, CategoryScale, Chart as ChartJS, LinearScale
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Monthly Views',
            data: [50, 120, 200, 0, 420, 300, 500],
        }
    ],
};

export function MyBarChartDemo1() {
    return <Bar data={data} />;
}
