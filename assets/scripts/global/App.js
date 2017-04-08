cc.Class({
    extends: cc.Component,

    properties: {

    },

    init() {
        /**
         * 全局事件
         */
        // this.eventTarget = new cc.EventTarget();//这种方法off事件要传callback
        this._eventMap = []; //这种自己实现的全局事件方法，可以直接off方法名，原理也更直白
        // /**
        //  * 全局变量
        //  */
        // const Constants = require("Constants");
        // this.CONSTANTS = Constants;
        /**
         * 全局控制器
         */

    },


    on: function (type, callback, target) { //用箭头函数注册，自动绑定target，不用在后面跟this
        if (this._eventMap[type] === undefined) {
            this._eventMap[type] = [];
        }
        this._eventMap[type].push({
            callback: callback,
            target: target
        });
    },

    emit: function (type, parameter) {
        let array = this._eventMap[type];
        if (array === undefined) return;

        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element) element.callback.call(element.target, parameter);
        }

    },

    offCb: function (type, callback) {
        var array = this._eventMap[type];
        if (array === undefined) return;

        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (element && element.callback === callback) {
                array[i] = undefined;
                break;
            }
        }
    },

    off: function (type) {
        this._eventMap[type] = undefined;
    },

    // on(type, callback) {
    //     this.eventTarget.on(type, callback, this.eventTarget, false);
    // },

    // off(type, callback) {
    //     this.eventTarget.off(type, callback, this.eventTarget, false);
    // },

    // emit(type, data) {
    //     this.eventTarget.emit(type, data);
    // }
});