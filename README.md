# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines where incorrect stage ordering leads to unexpected results. The bug involves applying the `$limit` stage after the `$project` stage in an aggregation pipeline.

## Bug Description
The aggregation pipeline is designed to find the top 10 most frequent values in a field. However, due to incorrect stage ordering, the limit is applied after the projection, leading to an inaccurate result set.

## Solution
The solution involves rearranging the stages in the aggregation pipeline such that `$limit` is applied before `$project`. This ensures that the limit is applied to the intermediate results before the projection is performed. 

## How to Reproduce
1. Clone this repository.
2. Setup MongoDB and populate the sample collection with test data.
3. Execute the `bug.js` script to observe the incorrect output.
4. Execute the `bugSolution.js` script to observe the correct output.
