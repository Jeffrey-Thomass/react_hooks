# Fetch vs Axios (Easy Explanation)

Both **fetch** and **axios** are used to make HTTP requests (API calls) in JavaScript.
They do the same job, but axios makes many things easier.

---

## 1. What is Fetch?

`fetch` is a **built-in browser API**.

Example:
```js
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
