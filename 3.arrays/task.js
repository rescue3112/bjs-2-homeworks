function compareArrays(arr1, arr2) {
    let result;

    // Ваш код
    if (arr1.length != arr2.length) {
        return false;
    }

    arr1.filter(function(cv, index, arr) {
        result = cv == arr2[index];
        return result;
    });

    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr;

    resultArr = arr.filter(function(cv, idx, arr) {
        return cv > 0 && cv % 3 == 0;
    }).map(function(cv, idx, arr) {
        return cv * 10;
    });

    return resultArr; // array
}