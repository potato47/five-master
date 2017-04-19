const CONSTANTS = require("Constants");
const TYPE = CONSTANTS.ELEMENT_TYPE;
const STATE = CONSTANTS.ELEMENT_STATE;
const PLACE = CONSTANTS.ELEMENT_PLACE;
cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * view
         */
        typeLabel: cc.Label,
        stateMask: cc.Node,

        /**
         * model
         */
        _state: STATE.HIDE,
        state: {
            get() {
                return this._state;
            },
            set(state) {
                if (this._state === state) {
                    return;
                }
                this._state = state;
                this.updateStateView();
            }
        },
        _type: TYPE.NONE,
        type: {
            get() {
                return this._type;
            },
            set(type) {
                if (this._type === type) {
                    return;
                }
                this._type = type;
                this.updateTypeView();
            }
        },
        _place: PLACE.RED,
        place: {
            get() {
                return this._place;
            },
            set(place) {
                this._place = place;
            }
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    init() {
        // let i = Math.floor(Math.random()*5)+1;
        // this.type = i;
        this.state = STATE.HIDE;
    },

    show(place) {

        let i = Math.floor(Math.random() * 5) + 1;
        this.type = i;

        if (place === PLACE.RED) {
            this.typeLabel.node.color = cc.Color.RED;
        } else if (place === PLACE.BLUE) {
            this.typeLabel.node.color = cc.Color.BLUE;
        }

        this.state = STATE.SHOW;

        this.updateStateView();
        this.updateTypeView();
    },

    getElementOfSheng(){
        switch(this.type){
            case TYPE.METAL:return TYPE.WATER;
            case TYPE.WATER:return TYPE.WOOD;
            case TYPE.WOOD:return TYPE.FIRE;
            case TYPE.FIRE:return TYPE.EARTH;
            case TYPE.EARTH:return TYPE.METAL;
        }
        cc.log("getElementOfSheng is error!");
        return TYPE.NONE;
    },

    getElementOfKe(){
        switch(this.type){
            case TYPE.METAL:return TYPE.WOOD;
            case TYPE.WOOD:return TYPE.EARTH;
            case TYPE.EARTH:return TYPE.WATER;
            case TYPE.WATER:return TYPE.FIRE;
            case TYPE.FIRE:return TYPE.METAL;
        }
        cc.log("getElementOfKe is error!");
        return TYPE.NONE;
    },

    transformSheng(){
        this.type = this.getElementOfSheng();
        this.updateTypeView();
    },

    transformKe(){

    },

    hide() {
        this.state = STATE.HIDE;
        this.type = TYPE.NONE;
        this.updateStateView();
        this.updateTypeView();
    },

    select() {
        this.state = STATE.SELECTED;
        this.updateStateView();
    },

    cancelSelect() {
        this.state = STATE.SHOW;
        this.updateStateView();
    },

    updateStateView() {
        switch (this.state) {
            case STATE.HIDE:
                this.stateMask.active = true;
                break;
            case STATE.SHOW:
                this.stateMask.active = false;
                this.node.color = cc.Color.WHITE;
                break;
            case STATE.SELECTED:
                this.node.color = cc.Color.GRAY;
                break;
            default:
                break;
        }
    },

    updateTypeView() {
        switch (this.type) {
            case TYPE.NONE:
                this.typeLabel.string = "空";
                break;
            case TYPE.METAL:
                this.typeLabel.string = "金";
                break;
            case TYPE.WOOD:
                this.typeLabel.string = "木";
                break;
            case TYPE.WATER:
                this.typeLabel.string = "水";
                break;
            case TYPE.FIRE:
                this.typeLabel.string = "火";
                break;
            case TYPE.EARTH:
                this.typeLabel.string = "土";
                break;
            default:
                break;

        }
    }


});