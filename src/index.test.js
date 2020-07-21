const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Computing Letter Grade', () => {
  it('Should Return Appropriate Letter Grade', () => {
	  
			// Arrange
	var test1 = 89.50
	var test2 = 60.00
	var test3 = 100
	var test4 = 75.65
	var test5 = 83.33
	var test6 = 94.99
			// Act
	var result1 = gradeClassifier(test1)
	var result2 = gradeClassifier(test2)
	var result3 = gradeClassifier(test3)
	var result4 = gradeClassifier(test4)
	var result5 = gradeClassifier(test5)
	var result6 = gradeClassifier(test6)
			// Assert
	expect(result1).toEqual('G')
	expect(result2).toEqual('D')
	expect(result3).toEqual('O')
	expect(result4).toEqual('N')
	expect(result5).toEqual('S')
	expect(result6).toEqual('V')
	  
    
  });
});
