notes-lect-153.md

# 153 Async Code in useEffect

Now that we have our useEffect hook and the second argument is an Array with the 'term' piece of state, everytime the user changes the text input, the useEffect arrow function (that is inside of the Search component) will execute the code inside the code body. So we can run some code anytime 'term' changes - even on user keypress within the search input.

Now we can make our Request inside of the useEffect function using Axios.

- install Axios library.
- We not allowed to mark as async with this function or hook and use the await keyword direct inside that function. If we try, will get error which we can see in the Console tab when we inspect in the UI.
- There are 3 different ways to make an Request inside of useEffect:

  1. use a temp helper function called: search and mark that as async. then use the await keyword inside here. Then immediate after we call that function. This is the reconmended solution by the error msg in the Console.

  ```js
  useEffect(() => {
    const search = async () => {
      await axios.get('url');
    };
    search();
  }, [term]);
  ```

  2. Similar to solution 1 but we can remove the temp variable of const search and the search() at the bottom. Now, to envoke this we wrap it in a pair of parentheses and after the closing perentheses and put in another set of perentheses. This defines a function and immediately invokes it. this solution is the same as the first solution, it jsut removes that extra variable declaration. This is commonlly used solution as the syntax is easier to read.

  3. Third solution is to just go back to using normal promises. Chain on a '.then' statement. Then the arrow fn inside will be invoked with the response that we get back from the API and that is all the info we are looking for. So we are making use of promises. This not used in the community but its the easiest to use.

  ```js
  useEffect(() => {
    axios.get('url').then((response) => {
      console.log(resonse.data);
    });
  }, [term]);
  ```

React recommends solution number 1 which is to declare a helper function and then call it yourself immediately.

## Conclusion

Don't try to mark useEffect function as async as this will give us an Error that we can see when we Inspect the UI -> Consol tab: React reconmends us to use solution number 1.
