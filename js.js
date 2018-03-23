
function skipRange(start, end, skip) {

    for(var i = start; i<end; i+=skip) {
        console.log(i);
    }

}


skipRange(1, 20, 2);