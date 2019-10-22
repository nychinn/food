# React Native Notes

## Using Outside APIs
- If we want to use several APIS, we can include a file for each within the src/api directory

### Fetch
- built in function for making network requests
- error handling is weird
- requires us to write a lot of wrapper code

### Axios
- separate library for making requests
- easy to use, sensible defaults
- increase app size (very slightly)
- teacher recommends to use axios over fetch

### Error Handling
- try catch statement to display error when needed
- use err argument in 'catch'