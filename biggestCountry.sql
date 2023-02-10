-- Runtime
-- 393 ms
-- Beats
-- 73.7%
-- Click the distribution chart to view more details
-- Notes
-- Write your notes here
-- Related Tags
-- Select tags
-- 0/5
-- # Write your MySQL query statement below

SELECT name, population, area 
FROM World
WHERE population >= 25000000 OR area >= 3000000 ;