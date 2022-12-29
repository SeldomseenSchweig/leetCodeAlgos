-- Runtime
-- 370 ms
-- Beats
-- 92.30%
-- Click to check the distribution chart
-- Notes
-- Write your notes here
-- Related Tags
-- Select tags
-- 0/5
-- # Write your MySQL query statement below

SELECT firstName, LastName, city, state FROM Person LEFT JOIN Address ON Person.personId = Address.personID