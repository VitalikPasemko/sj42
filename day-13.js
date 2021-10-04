//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
  if (!job.maxSalary || !candidate.minSalary) throw new Error("");
  return candidate.minSalary * 0.9 <= job.maxSalary;
}
