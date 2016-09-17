import vm from "./budget_view_model";

const BudgetTable = {
  controller: function () {

  },
  view: function () {
    return m('table', {
      class: 'table table-bordered'
    }, [
      m('thead', [
        m('tr', [
          m('th', 'Value'),
          m('th', 'Name'),
          m('th', 'Description')
        ])
      ]),
      m('tbody', 
        vm.costs.map(function (cost, index) {
          return m('tr', [
            m('td', cost.value()),
            m('td', cost.name()),
            m('td', cost.description())
          ])
        })
      )
    ]);
  }
};

export default BudgetTable;
