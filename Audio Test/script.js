
var myChart = document.getElementById('myChart').getContext('2d');

var someChart = new Chart(myChart, {
    type: 'bar', //bar horizontalBar pie line donut, radar polarArea
    data: {
        labels:['test1', 'test2', 'test3', 'test4'],
        datasets:[{
            label:'HORIZONTAL?',
            data:[
                23,
                24,
                20,
                25
            ],
            backgroundColor: ['green', 'blue', 'red', 'purple'
        ]
            
        }],
    },
    options:{},
});