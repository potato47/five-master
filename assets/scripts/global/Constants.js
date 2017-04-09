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
    SHOW: -1
});
module.exports = {
    ELEMENT_TYPE: ELEMENT_TYPE,
    ELEMENT_STATE: ELEMENT_STATE
}