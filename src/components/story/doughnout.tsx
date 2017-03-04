import * as React from "react";
import * as _ from "lodash";
const LineChart = require("react-chartjs-2").Bar;
let opt = {
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }
};


let getData = (labels, data) => ({
    labels: labels,
    datasets: [
        {
            label: "Work we do",
            backgroundColor: data.map(item => '#' + (Math.random() * 0xFFFFFF << 0).toString(16)),
            borderColor: data.map(item => '#' + (Math.random() * 0xFFFFFF << 0).toString(16)),
            borderWidth: 1,
            data: data,
        }
    ]
});


export const JobBarChart = ({size, workers}) => {
    let stat = _(workers)
        .keys()
        .map(ID => (workers[ID]))
        .countBy("job").value();


    let labels = _(stat).keys().value();
    let data = _(stat).keys().map(ID => stat[ID]).value();
    return <LineChart data={getData(labels,data)}
                      options={opt}
                      width={0.7*size.width} height={window.outerHeight*0.40}/>
};
