const Input = function (name, vm, label) {
  return m('div', {
    class: 'form-group'
  }, [
    m('label', {
      for: name
    }, label || name.charAt(0).toUpperCase() + name.slice(1)),
    m('input', {
      value: vm[name](),
      class: 'form-control',
      name: name
    })
  ]);
};

export default Input;
