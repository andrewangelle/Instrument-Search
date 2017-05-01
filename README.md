# Instrument-Search

## Introduction

  A single page web application built with React, Node, and PostgreSQL. 

  Checkout a live demo of the app's main search feature:

  https://orchestral-instrument-database.herokuapp.com

## Description

  The app will meet two projected needs of a user...

  1. Information on a single instrument
  
  2. Information about a group of instruments

    Example 1 
      Searching 'Name: Trumpet' will yield...

      Family: Brass
      Pitch: B-flat
      Sounds at: M2 lower ..(relative to concert pitch)
      Transposes: M2 higher ..(to match concert pitch)
      Reads Treble Clef

    Example 2 
      Searching 'Family: Strings' will yield...

      Harpsichord
      Violin
      Cello
      Viola
      Harp
      Double Bass
      Guitar
 	
 	Example 3
      Searching 'Family: Strings' and'Clef: Treble' will yield...

      Violin
      Guitar 



## Technologies Used
 
    React.js
      Main Search UI
      Admin UI for database maintenance

    Node.js/Express.js:
      Server and API

    PostgreSQL:
      Database


## License
MIT