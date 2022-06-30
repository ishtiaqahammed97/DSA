// Leetcode problem 2

// You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3]
// l2 = [5,6,4]
// Output: [7,0,8]

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode()
    let node = head
    let carry = 0
    
    while(l1 || l2) { 
        let l1Value = l1 !== null ? l1.val : 0
        let l2Value = l2 !== null ? l2.val : 0
        
        let sum = l1Value + l2Value + carry
        carry = 0
        let newValue = sum
        
        if(sum > 9) {
            newValue = sum % 10      
            carry = 1
        }
        
        node.next = new ListNode(newValue)
        node = node.next
    
        if(l1) {
            l1 = l1.next
        }
        
        if(l2) {
            l2 = l2.next
        }
    }
    
    if(carry) {
        node.next = new ListNode(carry)
    }
    
    return node
};

addTwoNumbers([2,4,3],[5,6,4])