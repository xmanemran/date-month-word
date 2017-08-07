function _toMonth(number){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (Number(number) && number < 13) ? months[number-1] : false;
}

function _toDate(number){
    if(number > 0 && number < 31){
        switch(number){
            case 1:
                return number + "st";
            case 2: 
                return number + "nd";
            case 3:
                return number + "rd";
            default:
                return number + "th";
        }
    }else
        return false
        
}

module.exports = {
    toMonth : _toMonth,
    toDate : _toDate
} 

