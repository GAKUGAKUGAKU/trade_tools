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
      action: '犬の人形',
      value: '1000',
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
      action: '人間',
      value: '1000',
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
      action: '高級ウェットフード',
      value: '1000',
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
      action: '横取りフード',
      value: '1000',
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
        action: '横取りフード',
        value: '8000',
        quantity: 'eidi',
        cost: 'A',
        reason: 'B',
        memo: 'C'
      });
    },
    mod: function (event) {
      console.log("modButton click");
      this.items.find((item) => item.no === "4").action = "更新された！！";
    },
    del: function (index) {
      console.log("dlelButton click");
      this.items.splice(index, 1);
    },
    downloadcsv: function () {
      console.log("downloadcsv click");
      var csv = '\uFEFF' + '#,日時,戦略,ティッカー,ID,買付/売却,価格,数量,手数料,理由,備考\n'
      this.items.forEach(el => {
        var line = el['no'] + ',' + el['date'] + ',' + el['strategy'] + ',' + el['ticker'] + ',' + el['id'] + ',' + el['favorite'] + ',' + el['value'] + ',' + el['quantity'] + ',' + el['cost'] + ',' + el['reason'] + ',' + el['memo'] + '\n'
        csv += line
      })
      let blob = new Blob([csv], { type: 'text/csv' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'trade_data.csv'
      link.click()
    },
    save: function () {
      console.log("save click");
    },
    analysis: function () {
      console.log("save click");
    },
    uploadcsv: function (csvfile) {
      console.log("uploadcsv click");
      const file = csvfile.target.files[0];
      const reader = new FileReader();
      const workers = [];

      const loadFunc = () => {
        const lines = reader.result.split("\n");
        lines.forEach(element => {
          const workerData = element.split(",");
          if (workerData.length != 11) return;
          const worker = {
            no: workerData[0],
            date: workerData[1],
            strategy: workerData[2],
            ticker: workerData[3],
            id: workerData[4],
            action: workerData[5],
            value: workerData[6],
            quantity: workerData[7],
            cost: workerData[8],
            reason: workerData[9],
            memo: workerData[10]
          };
          workers.push(worker);
        });
        this.workers = (workers);
        this.workers.shift();
        this.items = new Array();
        this.items = this.items.concat(this.workers);
      };
      reader.onload = loadFunc;
      reader.readAsText(file);

      fetch('https://gakugakugaku.github.io/trade_tools/tradedata/trade_data.csv')
        .then(response => response.text())
        .then(data => console.log(data));
      // .then(this.items.find((item) => item.no === "1").action = "a");
    }
  }
}
)