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
    },
    downloadcsv: function () {
      var csv = '\uFEFF' + '#,日時,戦略,ティッカー,ID,買付/売却,価格,数量,手数料,理由,備考\n'
      this.items.forEach(el => {
        var line = el['no'] + ',' + el['date'] + ',' +  el['strategy']  + ',' +  el['ticker'] + ','  +  el['id'] + ','  +  el['favorite'] + ','  +  el['value']  + ',' +  el['quantity'] + ','  +  el['cost'] + ','  +  el['reason']  + ',' +  el['memo'] + '\n'
        csv += line
      })
      let blob = new Blob([csv], { type: 'text/csv' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'trade_data.csv'
      link.click()
    }
  }
}
)