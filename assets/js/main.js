const store = {
  name: 'Sin nuts',
  address: {
    country: 'Ukraine',
    city: 'Odessa',
    street: 'Katerininska',
    houseNumber: '29',
  }
}

store.clients = {};

store.clients['Viacheslav Koniev'] = {
  quantity: 5,
  bonuses: 5000,
}
store.clients['Татьяна Пыпко'] = {
  quantity: 4,
  bonuses: 4000,
}
store.clients['Ольга Тупчій'] = {
  quantity: 3,
  bonuses: 3000,
}
store.clients['Olena Demchyk'] = {
  quantity: 2,
  bonuses: 2000,
}
store.clients['Галина Мачинська'] = {
  quantity: 1,
  bonuses: 1000,
}

console.log(Object.values(store))