import {
    BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'MyBarChartDemo2 - multiple data sets, colours ',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => makeRandomInt(0, 1000)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => makeRandomInt(0, 1000)),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};



function makeRandomInt(mn: number, mx: number): number {
    return Math.floor(Math.random() * (mx - mn) + mn);

}

export function MyBarChartDemo2() {
    return <Bar options={options} data={data} />;
}
