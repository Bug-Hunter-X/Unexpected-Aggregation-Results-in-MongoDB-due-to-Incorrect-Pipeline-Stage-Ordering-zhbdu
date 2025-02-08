```javascript
//Corrected aggregation pipeline
db.collection('myCollection').aggregate([
  { $match: { 'field1': { $eq: 'value1' } } },
  { $group: { _id: '$field2', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 },
  { $project: { _id: 0, field2: '$_id', count: 1 } }
]);
```