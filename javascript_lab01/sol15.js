let undefinedObj;

try {
    console.log(undefinedObj.nonExistentProperty);
} catch (e) {
    if (e instanceof TypeError) {
        console.log("The object is probably undefined.");
    }
}