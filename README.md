# AngularJS Starter Template

This repository is provisioned as a template with the intention of assisting a developer in getting setup quickly with AngularJS development. It's intention is to assist developers who are required to work with legacy technologies.  
The AngularJS app is served as static content from a NodeJS web server. Without serving from a server, browsers' [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) policies will prevent html templates from being loaded (you would have to write html in a one line string!).

## Included Libraries
<strong>AngularJS</strong> @ 1.4.0    
<strong>JQuery</strong> @ 1.7.2  
<strong>Bootstrap</strong> @ 2.3.0   
<strong>Underscore</strong> @ 1.4.4  

## Requirements
Node & npm

## Getting Started
Open a Terminal or Command Prompt at the root directory and run the following commands;  

<code>npm i</code>  

You should now see a <code>node_modules</code> directory with express server and body parser dependencies included  

<code>npm run start</code>  

Open a web browser at <code>localhost:8000</code> (port can be changed on line 7 of scripts/web-server.js if 8000 is in use by another application)  
