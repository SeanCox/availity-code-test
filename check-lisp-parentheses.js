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

console.log(checkLispParentheses(test1) + " pass");
console.log(checkLispParentheses(test2) + " pass");
console.log(checkLispParentheses(test3) + " pass");
console.log(checkLispParentheses(test4) + " pass");
console.log(checkLispParentheses(test5) + " fail");
console.log(checkLispParentheses(test8) + " fail");
console.log(checkLispParentheses(test7) + " fail");
