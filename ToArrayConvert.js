// Data to array convert keeping type.
function ToArrayConver(values){
    var values = prompt("Enter array values using comma ','");
    values = values.split(",");
    for (i = 0; i < values.length; i++) {
        if (isNaN(parseInt(values[i]))) {
            values[i] = values[i];
        } else {
            values[i] = parseInt(values[i]);
        }
    }
}
