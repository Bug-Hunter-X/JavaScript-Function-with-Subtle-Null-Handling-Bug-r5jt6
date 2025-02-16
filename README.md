# JavaScript Function with Subtle Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value handling within functions. The `foo` function aims to add two numbers but incorrectly returns `null` when either or both inputs are null. This behavior might lead to unexpected results in applications where null values are possible.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.  The issue highlights the importance of carefully handling null values to avoid unexpected program behavior.

## Bug Description

The function `foo` returns `null` if either input (`a` or `b`) is `null`. While this might seem logical, there could be cases where you'd want the function to handle this differently, for instance by returning 0 or throwing an error, depending on the requirements.