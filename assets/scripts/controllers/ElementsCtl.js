const CONSTANTS = require("Constants");
const ELEMENT_TYPE = CONSTANTS.ELEMENT_TYPE;
const ELEMENT_STATE = CONSTANTS.ELEMENT_STATE;
const USER_ACTION = CONSTANTS.USER_ACTION;
const REACTION = CONSTANTS.REACTION;
cc.Class({
    extends: cc.Component,

    properties: {
        elementPrefab: cc.Prefab,
        elementsLayout: cc.Node,
        elementsNumber: 0,
        row: 0,
        col: 0
    },

    // use this for initialization
    onLoad: function () {

    },

    init(game) {
        this.game = game;
        this.elements = [];
        this.elementsLayout.removeAllChildren();
        for (let i = 0; i < this.elementsNumber; i++) {
            let elementNode = cc.instantiate(this.elementPrefab);
            this.elementsLayout.addChild(elementNode);
            let element = elementNode.getComponent("Element");
            this.elements[i] = element;
            // element.state = ELEMENT_STATE.SHOW;
            // element.type = ELEMENT_TYPE.WATER;
            element.init();
            elementNode.on("touchstart", () => {
                this.onElementTouch(element);
            });
        }
        this.userAction = USER_ACTION.NONE;
        this.touchList = [];
        setTimeout(() => {
            this.elementsLayout.getComponent(cc.Layout).destroy();
        }, 0);
    },

    onElementTouch(element) {

        this.touchList.push(element);
        if (this.touchList.length === 1) {
            let touchElement = this.touchList[0];
            switch (touchElement.state) {
                case ELEMENT_STATE.HIDE:
                    touchElement.show(this.game.curTurn);
                    this.touchList = [];
                    break;
                case ELEMENT_STATE.SHOW:
                    touchElement.select();
                    break;
                    // case ELEMENT_STATE.SELECTED://这种情况暂时不存在
                    //     touchElement.cancelSelect();
                    //     break;
            }
        } else if (this.touchList.length === 2) {
            let touchElement1 = this.touchList[0];
            let touchElement2 = this.touchList[1];
            switch (touchElement2.state) {
                case ELEMENT_STATE.HIDE:
                    touchElement1.cancelSelect();
                    break;
                case ELEMENT_STATE.SHOW:
                    touchElement1.cancelSelect();
                    let reaction = app.gameRule.judgeReaction(touchElement1, touchElement2);
                    if (reaction === REACTION.NONE) { //没有反应
                        touchElement1.cancelSelect();
                    } else if (reaction === REACTION.SHENG) { //相生
                        touchElement1.transformSheng();
                        touchElement1.cancelSelect();
                        touchElement2.cancelSelect();
                        [touchElement1.node.position, touchElement2.node.position] = [touchElement2.node.position, touchElement1.node.position];
                        touchElement2.hide();
                    } else if (reaction === REACTION.KE) { //相克
                        touchElement1.cancelSelect();
                        touchElement2.cancelSelect();
                        [touchElement1.node.position, touchElement2.node.position] = [touchElement2.node.position, touchElement1.node.position];
                        touchElement2.hide();
                    }
                    break;
                case ELEMENT_STATE.SELECTED:
                    touchElement2.cancelSelect();
                    break;
            }
            this.touchList = [];
        }
        this.game.changeTurn();
    }
});