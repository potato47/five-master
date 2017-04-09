const CONSTANTS = require("Constants");
const TYPE = CONSTANTS.ELEMENT_TYPE;
const STATE = CONSTANTS.ELEMENT_STATE;
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
        }
    },

    // use this for initialization
    onLoad: function () {
        
    },

    init() {
        let i = Math.floor(Math.random()*5)+1;
        this.type = i;
        this.state = STATE.HIDE;
    },

    updateStateView() {
        switch (this.state) {
            case STATE.HIDE:
                this.stateMask.active = true;
                break;
            case STATE.SHOW:
                this.stateMask.active = false;
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