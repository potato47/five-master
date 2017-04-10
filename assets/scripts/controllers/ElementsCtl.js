const CONSTANTS = require("Constants");
const ELEMENT_TYPE = CONSTANTS.ELEMENT_TYPE;
const ELEMENT_STATE = CONSTANTS.ELEMENT_STATE;
const USER_ACTION = CONSTANTS.USER_ACTION;
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
        this.userAction = USER_ACTION.NONE;
    },

    onElementTouch(element){
        if(element.state === ELEMENT_STATE.HIDE){
            if(this.elementAction === "啥也没干"){
                this.elementAction = "点开一个方块";
            }else if(this.elementAction === "移动一个方块第一步"){
                this.elementAction = "移动一个方块第二步";
            }
        }else if(element.state === ELEMENT_STATE.SHOW){
            this.elementAction = "移动一个方块第一步";
        }else if(element.state === ELEMENT_STATE.SELECTED){
            this.elementAction = "取消移动一个方块";
        }
        element.show(this.game.curTurn);
        this.game.changeTurn();
    }
});
