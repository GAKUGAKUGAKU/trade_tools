/**
 * Vueインスタンス生成
 */
constapp = new Vue({
  el: '#app',
  data: {
    items: [{
      no: '1',
      date: 'そら',
      strategy: '♂',
      ticker: '8',
      id: 'キジトラ',
      favorite: '犬の人形',
      value: '1,000',
      quantity: 'eidi',
      cost: 'A',
      reason: 'B',
      memo: 'C'
    }, {
      no: '2',
      date: 'りく',
      strategy: '♂',
      ticker: '7',
      id: '長毛種',
      favorite: '人間',
      value: '1,000',
      quantity: 'eidi',
      cost: 'A',
      reason: 'B',
      memo: 'C'
    }, {
      no: '3',
      date: 'うみ',
      strategy: '♀',
      ticker: '6',
      id: 'ミケ',
      favorite: '高級ウェットフード',
      value: '1,000',
      quantity: 'eidi',
      cost: 'A',
      reason: 'B',
      memo: 'C'
    }, {
      no: '4',
      date: 'こうめ',
      strategy: '♀',
      ticker: '4',
      id: 'サビ',
      favorite: '横取りフード',
      value: '1,000',
      quantity: 'eidi',
      cost: 'A',
      reason: 'B',
      memo: 'C'
    },]
  },
  methods: {
    add: function (event) {
      console.log("addButton click");
      let no = this.items.length + 1;
      this.items.push({
        no: '4',
        date: 'こうめ',
        strategy: '♀',
        ticker: '4',
        id: 'サビ',
        favorite: '横取りフード',
        value: '1,000',
        quantity: 'eidi',
        cost: 'A',
        reason: 'B',
        memo: 'C'
      });
    },
    mod: function (event) {
      console.log("modButton click");
      this.items.find((item) => item.name === "こなつ").favorite = "高いところ";
    },
    del: function (index) {
      console.log("dlelButton click");
      this.items.splice(index,1);
    }
  }
}
 )