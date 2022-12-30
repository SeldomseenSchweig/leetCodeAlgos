-- Runtime
-- 1371 ms
-- Beats
-- 22.43%
-- Click to check the distribution chart
-- Notes
-- Write your notes here
-- Related Tags
-- Select tags
-- 0/5
-- # Please write a DELETE statement and DO NOT write a SELECT statement.
-- # Write your MySQL query statement below


DELETE p1
FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND
p1.Id > p2.Id