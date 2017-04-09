const CONSTANTS = require("Constants");
const ELEMENT_TYPE = CONSTANTS.ELEMENT_TYPE;
const ELEMENT_STATE = CONSTANTS.ELEMENT_STATE;
cc.Class({
    extends: cc.Component,

    properties: {
        elementPrefab:cc.Prefab,
        elementsLayout:cc.Node,
        elementsNumber:0,
        row:0,
        col:0
    },

    // use this for initialization
    onLoad: function () {

    },

    init(game){
        this.game = game;
        this.elements = [];
        this.elementsLayout.removeAllChildren();
        for(let i = 0;i<this.elementsNumber;i++){
            let elementNode = cc.instantiate(this.elementPrefab);
            this.elementsLayout.addChild(elementNode);
            let element = elementNode.getComponent("Element");
            this.elements[i] = element;
            // element.state = ELEMENT_STATE.SHOW;
            // element.type = ELEMENT_TYPE.WATER;
            element.init();
            elementNode.on("touchstart",()=>{
                this.onElementTouch(element);
            });
        }
    },

    onElementTouch(element){
        element.state = ELEMENT_STATE.SHOW;
    }
});
