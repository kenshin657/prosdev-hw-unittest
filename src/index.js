const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
	if(grade > 94.99 && grade <= 100)
		return 'O';
	if(grade > 89.99 && grade <= 94.99)
		return 'V';
	if(grade > 84.99 && grade <= 89.99)
		return 'G';
	if(grade > 79.99 && grade <= 84.99)
		return 'S';
	if(grade > 74.99 && grade <= 79.99)
		return 'N';
	if(grade <= 74.99)
		return 'D';
  }
}

module.exports = functions;
