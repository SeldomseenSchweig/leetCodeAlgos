-- MySQL
-- Runtime
-- 1006 ms
-- Beats
-- 27.97%
-- Click to check the distribution chart
-- Notes
-- Write your notes here
-- Related Tags
-- Select tags
-- 0/5
-- # Write your MySQL query statement below

SELECT player_id, MIN(event_date) AS first_login 
FROM Activity
GROUP BY player_id