import vm from './budget_view_model';

const PieChart = {
  controller: function () {
    this.setup = function (elem) {
      var chart = new Chart(elem, {
        type: 'pie',
        data: {
          labels: vm.costs.map(cost => cost.name()),
          datasets: [
            {
              data: vm.costs.map(cost => cost.value()),
              backgroundColor: [
                'red', 'blue', 'green', 'yellow', 'orange'
              ]
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
