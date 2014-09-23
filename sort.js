function bubbleSort(Array) {
  backend=Array.length;
  len = backend;
  for (i=0; i<len; i++, backend--) {
    for (var j=0; j<backend; j++) {
      if(Array[j] > Array[j+1]) {
        tmp = Array[j];
        Array[j] = Array[j+1];
        Array[j+1] = tmp;
      }
    }
  }
  return Array;
}

function merge_sort (array) {
  if (array.length <= 1) {
    return array;
  }
  var left, right;
  var middle = Math.floor(array.length/2);
  left = merge_sort(array.slice(0,middle));
  right = merge_sort(array.slice(middle));
  return merge(left, right);
}

function merge(left, right){ 
  sorted = [];
  l_len = left.length;
  r_len = right.length;
  l_i = 0;
  r_i = 0;

  while(l_i < l_len && r_i < r_len) {
    if(left[l_i] <= right[r_i]) {
      sorted.push(left[l_i]);
      l_i++;
    } else {
      sorted.push(right[r_i]);
      r_i++;
    }
  }
  while (l_i < l_len) {
    sorted.push(left[l_i]);
    l_i++;
  }
  while (r_i < r_len) {
    sorted.push(right[r_i]);
    r_i++;
  }
  return sorted;
}
