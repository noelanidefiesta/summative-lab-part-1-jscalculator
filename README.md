JavaScript Calculator – Project Overview
This was one of the first big projects I built during my time at Flatiron School’s Software Engineering Bootcamp. It’s a straightforward calculator made with vanilla JavaScript that handles basic math and keeps a running history of each calculation.

How it Works
There are four main functions: add(), subtract(), multiply(), and divide(). Each takes in two numbers and returns the result. I also added a bit of error handling in the divide() function to prevent division by zero.

Every time a calculation runs, it gets logged as an object with the inputs, operator, and result, and added to a calculationHistory array. I wrote a function called addToHistory() to handle that, along with displayHistory() to show all past calculations in a clean format. If there’s no history yet, it just lets the user know.

What I Used
Plain JavaScript with no libraries or frameworks.

What I Got Out of It
This project helped me get more comfortable with core JavaScript concepts like functions, arrays, conditionals, and debugging. It was a great introduction to breaking down logic and building something functional from the ground up.# summative-lab-part-1-jscalculator

How I Tested It
After running into issues pasting my code directly into Chrome’s console, I reached out to a few friends and classmates for help. They suggested creating a separate HTML file, which worked perfectly. I tested several operations and was able to confirm that the calculator returned the correct results each time. See calculator.html file for tests