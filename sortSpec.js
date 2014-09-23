describe("bubbleSort", function() {
  var unsortedArray;
  var sorted = [ 3, 4, 5, 9, 10, 12, 17, 23 ];

  beforeEach(function() {
    unsortedArray= [5, 9, 3, 4, 12, 23, 17, 10]
  });

  it("runs merge_sort on an array and returns a sorted array", function() {
    expect(bubbleSort(unsortedArray)).toEqual(sorted);
  });

});



describe("merge_sort", function() {
  var unsortedArray;
  var sorted = [ 3, 4, 5, 9, 10, 12, 17, 23 ];

  beforeEach(function() {
    unsortedArray= [5, 9, 3, 4, 12, 23, 17, 10]
  });

  it("runs the merge on two numbers contained in their own arrays", function() {
    expect(merge([87], [78])).toEqual([78, 87]);
  });

  it("runs the merge with two uneven arrays and returns an sorted array", function() {
    expect(merge([1,3,4,5,9,], [2,6,8])).toEqual([1,2,3,4,5,6,8,9]);
  }) 

  it("runs merge_sort on an array and returns a sorted array", function() {
    expect(merge_sort(unsortedArray)).toEqual(sorted);
  });

});



