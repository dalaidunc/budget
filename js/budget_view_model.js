// View-Model
const BudgetViewModel = {
  reset: function () {
    vm.name = m.prop('');
    vm.description = m.prop('');
    vm.value = m.prop(0);
    vm.datePaid = m.prop(new Date());
  },
  init: function () {
    vm.costs = new BudgetItems();

    vm.reset();

    vm.add = function () {
      if (vm.description()) {
        vm.costs.push(new BudgetItem(vm));
        vm.reset();
      }
    };
  }
};

const vm = BudgetViewModel;

const BudgetItem = function (data) {
  this.datePaid = m.prop(data.datePaid());
  this.name = m.prop(data.name());
  this.description = m.prop(data.description());
  this.value = m.prop(data.value());
};

const BudgetItems = Array;

export default BudgetViewModel;
