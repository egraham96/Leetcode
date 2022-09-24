

//Approach: Using a Stack
var isValid = function(s) {
    // Initialize stack to store the closing brackets expected...
    let stack = [];
    // Traverse each charater in input string...
    for (let idx = 0; idx < s.length; idx++) {
        // If open parentheses are present, push it to stack...
        if (s[idx] == '{') {
            stack.push('}');
        } else if (s[idx] == '[') {
            stack.push(']');
        } else if (s[idx] == '(') {
            stack.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (stack.pop() !== s[idx]) {
            return false;
        }
    }
    return !stack.length;
};
var s = "()[]{}";
isValid(s);
//Time Complexity: O(n), because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1)O(1) time.
//Space Complexity: O(n), as we push all opening brackets onto the stack and in the worst case, we will end up pushing all the brackets onto the stack. e.g. ((((((((((.
