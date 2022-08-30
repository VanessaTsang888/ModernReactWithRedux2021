# 160 - Only Search with a Term

Make sure we only do a search when we have a search term inside of the input. So only run a search if there is a term. So if term is an empty string don't do a search at all. Otherwise if we have some term defined go ahead and run a search. So only when user starts to type, we start to do some searches.

I've written the new code and my comments and ran the App and tested in the UI by inspecting the it -> Network -> Fetch/XHR: deleted the existing default search term, type new search term of: program, and watch the api searches appear in this tab. See my screenshot.

## Next Up

We are doing too many searches. Will take care of this in next lecture.
