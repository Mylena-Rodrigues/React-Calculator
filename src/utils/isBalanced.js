export function isBalanced(label) {
  let open = '(';
  let close = ')';
  let count = 0;
  for (let i = 0; i < label.length; i++) {
    let ch = label.charAt(i);
    if (ch === open) {
      count++;
    } else if (ch === close) {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}