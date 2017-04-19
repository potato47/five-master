const App = require("App");
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        window.app = new App();
        app.init();
        setTimeout(() => {
            this.onLoadSuccess();
        }, 2000);
    },

    onLoadSuccess() {
        cc.director.loadScene("menu");
    }
});