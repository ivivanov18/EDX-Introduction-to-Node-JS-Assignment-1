#MODULE 1 ASSIGNMENT
This is the first assignment of the Microsoft Introduction to Node.js course.

##Aim
The goal is the make a csv to json converter.

##Question 1
I used the csvtojson module to leverage the richness of the node/npm environment. The code uses the following events:
- json: Every jsonObject is added to one array
- done: the obtained array of all the json objects (after all the csv lines have been parsed) is stringified and written to a file (standard fs module)

##Question 2
The project was tested using the linux diff command with the following parameters:
- diff -bq customer-data.json  customer-data-solution.json
    - q : quiet mode
    - b : --ignore-space-change which ignores changes in the amount of white space.

##Question 3
Everything works as it should work.
