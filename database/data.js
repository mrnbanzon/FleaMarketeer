// temporary data store prior to db integration
const data = {
  inventory: [
    {
      id: 0,
      item: 'Pooh Bear Plush Toy',
      value: 5.5,
      amount: '49',
      diff: 2.2
    },
    {
      id: 1,
      item: 'Red Balloon',
      value: 2,
      amount: '120',
      diff: 0
    },
    {
      id: 2,
      item: 'Piglet Plush Toy',
      value: 4.5,
      amount: '62',
      diff: 1.7
    },
    {
      id: 3,
      item: 'Tigger Plush Toy',
      value: 6.0,
      amount: '54',
      diff: -0.5
    },
    {
      id: 4,
      item: 'Eyeore Plush Toy',
      value: 4.0,
      amount: '83',
      diff: -0.25
    }
  ],
  inventoryCount: 368,
  totalSales: 231.14,
  avgDiff: 1.27,
  hotItem: 'Pooh Bear Plush Toy',
  marketName: 'Market Name',
  marketDesc:
    'sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at'
};

module.exports.data = data;