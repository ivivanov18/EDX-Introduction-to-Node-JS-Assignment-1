#MODULE 1 ASSIGNMENT
This is the first assignment of the Microsoft Introduction to Node.js course.

##Aim
The goal is the make a csv to json converter.

##Question 1: Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?
I used the csvtojson module to leverage the richness of the node/npm environment. The code uses the following events:
- json: Every jsonObject is added to one array
- done: the obtained array of all the json objects (after all the csv lines have been parsed) is stringified and written to a file (standard fs module)

##Question 2: How did you test your project to verify that it works? 
The project was tested using the linux diff command with the following parameters:
- diff -bq customer-data.json  customer-data-solution.json
    - q : quiet mode
    - b : --ignore-space-change which ignores changes in the amount of white space.


##Question 3: Let us know if anything doesn't work as intended so your reviewer will know ahead of time
Everything works as it should work.
