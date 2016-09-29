import vm from "./budget_view_model";
import Input from "./input";

const BudgetForm = {
  view: function () {
    return m('form', {
        onsubmit: function (e) {
          e.preventDefault();
          var data = new FormData(this);
          vm.props.forEach(function (prop) {
            vm[prop] = m.prop(data.get(prop));
          });
          vm.add();
          this.querySelector('input').focus();
        },
        class: 'budget-form'
      }, [
        Input('name', vm),
        Input('description', vm),
        Input('value', vm),
        m('button', {
          type: 'submit',
          class: 'btn btn-primary'
        }, 'Add'),
      ]);
  }
};

export default BudgetForm;
