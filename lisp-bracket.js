//Tests

const test1 = `(maphash #'(lambda (k v) (format t "~a => ~a~%" k v)) empList)`; //pass
const test2 = `(setf (gethash '003 empList) '(Mark Mongoose))`; //pass
const test3 = `((()))`; //pass
const test4 = `(()()()((())))`; //pass
const test5 = `((())`; // fail
const test6 = `(()(())((()))()))`; //fail
const test7 = `)(())((()))())(`; //fail
const test8 = `())`; //fail

function lispBrackets(code) {
  let brackets = [];
  let flag = "pass";
  //get brackets in que
  const result = code.split("");
  result.forEach((character) => {
    if (character === ")" && brackets.length === 0) {
      flag = "fail";
    }
    if (character === ")" && brackets[brackets.length - 1] === "(") {
      brackets.pop();
    }
    if (character === "(") {
      brackets.push("(");
    }
  });

  if (brackets.length > 0) {
    flag = "fail";
  }
  return flag;
  //clear brackets if match
  //if stack cleared return true
}

console.log(lispBrackets(test1) + " pass");
console.log(lispBrackets(test2) + " pass");
console.log(lispBrackets(test3) + " pass");
console.log(lispBrackets(test4) + " pass");
console.log(lispBrackets(test5) + " fail");
console.log(lispBrackets(test8) + " fail");
console.log(lispBrackets(test7) + " fail");
