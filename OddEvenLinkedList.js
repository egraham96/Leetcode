

var oddEvenList = function(head) {{
    if (head == null) return null;
    var odd = head;
    var even = head.next;
    var evenHead = even;
    while (even != null && odd.next.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}
}
var head = [1,2,3,4,5]
oddEvenList(head)
// Time Complexity: O(n), there are total n nodes and we visit each node once.
// Space Complexity: O(1), all we need is the four pointers.