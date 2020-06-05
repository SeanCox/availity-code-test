function checkLispParentheses(code) {
  const parentheses = [];
  let flag = true;

  code.split("").forEach((character) => {
    if (character === ")" && parentheses.length === 0) {
      flag = false;
    }
    if (character === ")" && parentheses[parentheses.length - 1] === "(") {
      parentheses.pop();
    }
    if (character === "(") {
      parentheses.push("(");
    }
  });

  if (parentheses.length > 0) {
    flag = false;
  }
  return flag;
}

//Tests
const test1 = `(maphash #'(lambda (k v) (format t "~a => ~a~%" k v)) empList)`; //pass
const test2 = `(setf (gethash '003 empList) '(Mark Mongoose))`; //pass
const test3 = `((()))`; //pass
const test4 = `(()()()((())))`; //pass
const test5 = `((())`; // fail
const test6 = `(()(())((()))()))`; //fail
const test7 = `)(())((()))())(`; //fail
const test8 = `())`; //fail

console.log(checkLispBrackets(test1) + " pass");
console.log(checkLispBrackets(test2) + " pass");
console.log(checkLispBrackets(test3) + " pass");
console.log(checkLispBrackets(test4) + " pass");
console.log(checkLispBrackets(test5) + " fail");
console.log(checkLispBrackets(test8) + " fail");
console.log(checkLispBrackets(test7) + " fail");
