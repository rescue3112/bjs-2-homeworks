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
() => {
    it("[1,2,3] === [1,2,3]  true", () => {
        expect(compareArrays([1, 2, 3], [1, 2, 3])).toEqual(true)
    })

    it("[1, 2], [1, 2, 3] false", () => {
        expect(compareArrays([1, 2], [1, 2, 3])).toEqual(false)
    })

    it("[1,2,3] === [3,2,1] false", () => {
        expect(compareArrays([1, 2, 3], [3, 2, 1])).toEqual(false)
    })

    it("[0,1,2] === [0, 1] false", () => {
        expect(compareArrays([0, 1, 2], [0, 1])).toEqual(false)
    })
    it("[8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5] false", () => {
        expect(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])).toEqual(false)
    })
}