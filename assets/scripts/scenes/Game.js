const ElementsCtl = require("ElementsCtl");
const CONSTANTS = require("Constants");
const ELEMENT_PLACE = CONSTANTS.ELEMENT_PLACE;
cc.Class({
    extends: cc.Component,

    properties: {
        elementsCtl:ElementsCtl,
        
    },

    // use this for initialization
    onLoad: function () {
        app.game = this;
        this.init();
        this.elementsCtl.init(this);
    },

    init(){
        this.curTurn = ELEMENT_PLACE.BLUE;
    },

    changeTurn(){
        if(this.curTurn === ELEMENT_PLACE.BLUE){
            this.curTurn = ELEMENT_PLACE.RED;
        }else if(this.curTurn === ELEMENT_PLACE.RED){
            this.curTurn = ELEMENT_PLACE.BLUE;
        }
    },

    onBtnReturnMenu(){
        cc.director.loadScene("menu");
    }
});
