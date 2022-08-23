

//Approach:
var rotateString = function(s, goal) {
    return s.length === goal.length && s.concat(s).includes(goal);
  }
var s= "abcde";
var goal= "abced";
rotateString(s, goal);
/*The Time Complexity of Approach 1 is O(n), the include method has time complexity O(n).
/*The Space Complexity of Approach 1 is O(1), both goal string and input string can have maximum size 100 characters, 100+100=200. */