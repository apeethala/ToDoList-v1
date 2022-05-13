exports.getDate=function() {
    var today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day= today.toLocaleDateString('en-US', options);
    return day;
}

exports.getDay=function() {
    var today = new Date();
    const options = { weekday: 'long'};
    var day= today.toLocaleDateString('en-US', options);
    return day;
}

