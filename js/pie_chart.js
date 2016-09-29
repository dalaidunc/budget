import vm from './budget_view_model';

var chart;

const PieChart = {
  controller: function () {
    this.setup = function (elem, isInitialized) {
      if (isInitialized) {
        var latest = vm.costs[vm.costs.length-1].value();
        console.log(latest);
        chart.data.datasets[0].data.push(latest);
        chart.update();
        return;
      }
      chart = new Chart(elem, {
        type: 'pie',
        options: {
          animation: {
            animateRotate: false,
            animateScale: false
          }
        },
        data: {
          labels: vm.costs.map(cost => cost.name()),
          datasets: [
            {
              data: vm.costs.map(cost => cost.value()),
              backgroundColor: ['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9']
            }
          ]
        }
      });
    };
  },
  view: function (ctrl) {
    // config is a mithril thing to call a fn after the DOM element is loaded
    return m('canvas', {config: ctrl.setup});
  }
};

export default PieChart;
