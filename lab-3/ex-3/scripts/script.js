const SetIntervalTime = [];
const SetTimeoutTime = [];
// header
let timeDifference = ['a', 'b'];

n = 100


google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(startCalculations);


function drawChart() {
    const chartData = google.visualization.arrayToDataTable(timeDifference);
    const options = {
        title: "n / abs difference",
    }

    const chart = new google.visualization.PieChart(document.querySelector('.pie-chart'));
    chart.draw(chartData, options);
}

function startCalculations() {
    // document.querySelector("delay")
    window.requestAnimationFrame(drawChart)

    // lastN = Math.min(SetIntervalTime.length, SetTimeoutTime.length);
    // for (let i = 0; i < lastN; i++) {
    //     timeDifference.push(Math.abs(SetIntervalTime[i] - SetTimeoutTime[i]));
    // }


    timeDifference = [0, 143251345.42315876, 1101178725.863503, 2321635161.896269, 2451820772.177956, 4154107901.9117856, 1820971028.6596684, 5414223861.423455, 2311336287.390807, 360153639.7239655, 7189905623.801748, 6608538376.115955, 5089469864.867337, 5454312924.670392, 6647040476.162616, 10736595954.780754, 5470143505.911885, 12037090028.468328, 14117687339.441296, 11719232756.715456, 11103250637.582188, 6516062926.663667, 1242495035.0242684, 6601289362.167773, 7897233223.796244, 21227370995.408817, 21203888119.524582, 7848890086.037632, 27401573004.50494, 8089303736.60296, 109808701.11027218, 15978202675.576698, 22565190190.031258, 31716892473.901623, 25405205691.44675, 34594073253.44277, 5765073180.57742, 20935212491.846786, 17522509646.86014, 15931579908.337606, 4202895248.1819725, 13558233168.675154, 37305526782.4682, 39742142121.52731, 33835513462.409748, 16654546369.622686, 6656310605.372424, 12105069841.576841, 47656657818.16495, 37875618503.00376, 10254919885.031921, 16023409615.19107, 39437570795.75311, 15962804822.348978, 46152055994.63477, 7773685892.985121, 6611839436.112294, 3572143122.702643, 25722895257.420315, 49725958824.57868, 28773836099.363686, 38227568649.613754, 59147860679.68796, 6915395712.212111, 5495311624.0114355, 55538724207.18155, 18239144989.384983, 11323087568.488874, 48153681941.44761, 4185166624.7454915, 39258852552.32595, 51730595260.09741, 349959214.8434267, 3522053174.515107, 71947601195.12442, 56889699815.09395, 57589518854.25743, 11852258567.909334, 71640113852.56953, 58591341859.93322, 6228459070.487774, 80106383359.49712, 51900276016.08614, 60872692611.17194, 37539635102.12386, 36389447989.02465, 31824216596.43131, 17722797916.6732, 87777451930.85864, 40730810662.52225, 56113111699.91241, 70105516779.7472, 40414247439.79299, 42958759052.64574, 65823757246.803024, 60072028331.74133, 19191320012.032017, 6497540471.606605, 44597613465.81147, 1479126054.320115];
    timeDifference = timeDifference.map((e, idx) => [String(e), e]);
    timeDifference.unshift(['a', 'b'])
    const chartData = google.visualization.arrayToDataTable(timeDifference);
    const options = {
        title: "n / abs difference",
    }

    const chart = new google.visualization.PieChart(document.querySelector('.pie-chart'));
    chart.draw(chartData, options)

}

//
//
// function doTimeConsumingCalculationsWithSetInterval() {
//     let startTime = performance.now();
//     calculatePrimes();
//     let endTime = performance.now();
//     SetIntervalTime.push(endTime - startTime);
//     if (SetIntervalTime.length > n) {
//         SetIntervalTime.shift()
//     }
// }
//
// function doTimeConsumingCalculationsWithSetTimeout() {
//     let startTime = performance.now();
//     calculatePrimes();
//     let endTime = performance.now();
//     SetTimeoutTime.push(endTime - startTime);
//     if (SetTimeoutTime.length > n) {
//         SetTimeoutTime.shift()
//     }
// }
//
//
// function calculatePrimes() {
//     for (let i = 1000; i < 10000; i++) {
//         for (let j = 2; j < Math.sqrt(i); j++) {
//             if (j % i == 0) {
//                 break;
//             }
//         }
//     }
// }
//
//
// function stopMeasuring() {
//     lastN = Math.min(SetIntervalTime.length, SetTimeoutTime.length);
//     for (let i = 0; i < lastN; i++) {
//         timeDifference.push(Math.abs(SetIntervalTime[i] - SetTimeoutTime[i]));
//     }
//     const chartData = timeDifference.map((e, idx) => [idx, e]);
//     const options = {
//         title: "n / abs difference"
//     }
//     const chart = new google.visualization.PieChart(document.querySelector(".pie-chart"));
//     chart.draw(chartData, options)
// }