cc.Class({
    extends: cc.Component,

    properties: {
        testLabel: cc.Label
    },

    // use this for initialization
    onLoad: function () {

    },

    onBtnPlay() {
        cc.director.loadScene("match");
        // cc.loader.load('http://www.potato47.cn/config/test.json', (err, config) => {
        //     this.testLabel.string = JSON.stringify(config)
        //     // cc.log(JSON.stringify(config));
        // });
        // var xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
        //         var response = xhr.responseText;
        //         console.log(response);
        //     }
        // };
        // xhr.open("GET", 'http://www.potato47.cn/config/test.json', true);
        // xhr.send();
    }
});