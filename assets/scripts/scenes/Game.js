const ElementsCtl = require("ElementsCtl");
cc.Class({
    extends: cc.Component,

    properties: {
        elementsCtl:ElementsCtl
    },

    // use this for initialization
    onLoad: function () {
        this.elementsCtl.init(this);
    },

    onBtnReturnMenu(){
        cc.director.loadScene("menu");
    }
});
