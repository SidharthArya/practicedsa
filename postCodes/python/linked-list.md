def serialize(result):
    # Convert ListNode back to list
    if isinstance(result, ListNode):
        out = []
        while result:
            out.append(result.val)
            result = result.next
        return out
    return result
