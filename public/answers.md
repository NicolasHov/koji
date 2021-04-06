# Answers

## Which library will you use to manage the state of the application? What pages are needed?

Context API

- 1 page for authentification
- 1 page for administrator : add templates
- 2 pages for user :
    - a form to generate new documents
    - his generated documents

## How will you arrange your navigation?

React Router

## What are the minimum api requests you will need?

A Post to create the template and the document

A Get to retrieve the documents (list and details)

## How will you manage the execution of api requests and their asynchronous return? How will you manage authentication?

API requests : Async/Await with a try-catch 

Authentication : AuthO

## Bonus: You need to implement an optional "dark" version in the application. How will you proceed ?

We could use the new : https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-color-scheme

We could also use contextAPI to store the theme in a global state