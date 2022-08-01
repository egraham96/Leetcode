

//Approach 1: Iterative Approach
const mergeTwoLists = function(l1, l2) {
    const head = new ListNode(null);
    let curr = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return head.next;
    
};
var l1 = [1,2,4];
var l2 = [1,3,4];
mergeTwoLists(l1, l2);
/*The Time Complexity of Approach 1 is O(min(N, M) where N is length of List 1 and M is length of List 2.*
/*The Space Complexity of Approach 1 is ?*/


//Approach 2: Recursive Approach
var mergeTwoListsTwo = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2;
    }
    let node = null;
    if (l1.val < l2.val) {
        node = l1;
        node.next = mergeTwoLists(l1.next, l2);
    } else {
        node = l2;
        node.next = mergeTwoLists(l1, l2.next);
    }
    return node;
};
var l1 = [1,2,4];
var l2 = [1,3,4];
mergeTwoListsTwo(l1, l2);
/*The Time Complexity of Approach 2 is O(min(N, M) where N is length of List 1 and M is length of List 2.
/*The Space Complexity of Approach 2 is O(min(N, M) where N is length of List 1 and M is length of List 2.*/