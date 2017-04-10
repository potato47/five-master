// cc.Enum.prototype.length = function () {
//     let count = 0;
//     for (let i in this) {
//         if (this.hasOwnProperty(i)) {
//             count++;
//         }
//     }
//     return count;
// };
const ELEMENT_TYPE = cc.Enum({
    NONE: -1,
    METAL: -1,
    WOOD: -1,
    WATER: -1,
    FIRE: -1,
    EARTH: -1
});
const ELEMENT_STATE = cc.Enum({
    HIDE: -1,
    SHOW: -1,
    SELECTED:-1
});
const ELEMENT_PLACE =  cc.Enum({
    RED:-1,
    BLUE:-1
}); 
const GAME_STATE = cc.Enum({
    NONE:-1,
    PREPARE:-1,
    PLAY:-1,
    OVER:-1
});
const USER_ACTION = cc.Enum({
    NONE:-1,
    TOUCH_FIRST_ELEMENT:-1,
    TOUCH_CANCEL:-1,
    TOUCH_SECOND_ELEMENT:-1
});
module.exports = {
    ELEMENT_TYPE: ELEMENT_TYPE,
    ELEMENT_STATE: ELEMENT_STATE,
    ELEMENT_PLACE: ELEMENT_PLACE,
    GAME_STATE:GAME_STATE,
    USER_ACTION:USER_ACTION
}