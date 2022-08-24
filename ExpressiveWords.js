

// Not much of an approach here. Seems most solutions involve using two functions.
var expressiveWords = function(S, words) {
    const isExpressive = (word) => {
        let wI = 0;
        let sI = 0;
        
        while (wI < word.length || sI < S.length) {
            let countW = 1;
            let countS = 1;
            
            if (word[wI] !== S[sI]) return false;
            
            while (word[wI] === word[wI++ + 1]) countW++;
            while (S[sI] === S[sI++ + 1]) countS++;

            if (countS < countW || (countS !== countW && countS < 3)) return false;
        }

        
        return true;
    }
    
    return words.filter(isExpressive).length;
};
/*The Time Complexity of Approach 1 is ?/*
/*The Space Complexity of Approach 1 is ?*/
        
        
        
        
        
        
        
    