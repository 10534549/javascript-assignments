function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    var sum=a+b;
    var final_result=cb(sum);
    return final_result;
}

module.exports = RunCallback;
