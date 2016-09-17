import vm from "./budget_view_model";
import BudgetTable from "./budget_table";
import BudgetForm from "./budget_form";
import BarChart from "./bar_chart";
import PieChart from "./pie_chart";

vm.init();

const Main = {
  controller: function () {

  },
  view: function () {
    return m('div', {
        class: 'container-fluid'
      }, [
        m('div', {class: 'row'}, [
          m('div', {class: 'main col-md-8'}, [
            m.component(BudgetTable),
            m.component(PieChart)
          ]),
          m('div', {class: 'side col-md-4'}, [
            m.component(BudgetForm)
          ])
        ])
    ]);
  }
};

m.mount(document.body, Main);
