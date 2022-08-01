

//Approach 1: 
var longestCommonPrefix = function(strs) {
    let ans = "";

	for(let i=0; i<strs[0].length; i++){
		let curr = strs[0][i];

		for(let j=1; j<strs.length; j++){
			if(strs[j][i] !== curr){
				return ans;
			}
		}

		ans += curr;
	}
	return ans;
};
/*The Time Complexity of Approach 1 is ?/*
/*The Space Complexity of Approach 1 is ?*/