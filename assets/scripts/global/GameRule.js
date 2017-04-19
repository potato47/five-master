const CONSTANTS = require("Constants");
const ELEMENT_TYPE = CONSTANTS.ELEMENT_TYPE;
const ELEMENT_STATE = CONSTANTS.ELEMENT_STATE;
const REACTION = CONSTANTS.REACTION;
cc.Class({
    extends: cc.Component,

    statics:{
        
    },

    judgeReaction(firstElement,secondElement){
        if(firstElement.type === secondElement.type){
            return REACTION.SHENG;
        }else if(firstElement.getElementOfKe() === secondElement.type){
            return REACTION.KE;
        }else{
            return REACTION.NONE;
        }
    }
    
});
