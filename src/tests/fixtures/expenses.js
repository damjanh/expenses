import moment from 'moment';

export default [{
    id: '1',
    description: 'Gym',
    amount: 13000,
    note: '',
    createdAt: 0,
},
{
    id: '2',
    description: 'Rent',
    amount: 20950,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf(),
},
{
    id: '3',
    description: 'Credit card',
    amount: 4500,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf(),
}];
