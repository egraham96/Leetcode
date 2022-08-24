

//Approach 1: Using Regex
const isIpv4 = (IP) => {
    const x = IP.split('.');
    
    if (x.length !== 4) return false;
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] <= 255 && 0 <= x[i] && parseInt(x[i]).toString() === x[i])
            continue;
        
        return false;
    }     
    
    return true;
};

const isIpv6 = (IP) => {
    const x = IP.split(':').map(x => x.toLowerCase());
    
    if (x.length !== 8) return false;
        
    const range = '0123456789abcdef';
        
    for (let i = 0; i < x.length; i++) {
        if (1 <= x[i].length && x[i].length <= 4 && 
            x[i].split('')
            .every(c => range.includes(c))) continue;
        
        return false;
    }     
    
    return true;
}

const validIPAddress = (queryIP) => isIpv4(queryIP) ? "IPv4" : isIpv6(queryIP) ? "IPv6" : "Neither";
var queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334";
validIPAddress(queryIP);
/*The Time Complexity of Approach 1 is O(n), because to count number of dots requires to parse the entire input string.
/*The Space Complexity of Approach 1 is O(1). */