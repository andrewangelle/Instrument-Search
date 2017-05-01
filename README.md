# Instrument-Search

## Introduction

  A single page web application built with React, Node, and PostgreSQL. 

  Checkout a live demo of the app's main search feature:

  https://orchestral-instrument-database.herokuapp.com

## Description

  The app will meet two projected needs of a user.
    1. Information on a single instrument
    2. Information about a group of instruments

    Example 1 - Information on a single instrument:
      Searching 'Name: Trumpet' will give back...
      Family: Brass
      Pitch: B-flat
      Sounds at: major-second lower ..(relative to concert pitch)
      Transposes: major-second higher ..(to match concert pitch)
      Reads Treble Clef

    Example 2 - Information on a group of instruments:
      Searching 'Family: Strings' will give back...
      All instruments in the database that are a part of strings instrument family

      Likewise, searching 'Family: Strings' and 'Clef: Treble' will filter down further to two instruments that are part of the strings family and read treble clef.

## Technologies Used
 
    React.js:
       Main/Admin UI

    Node.js/Express.js:
      Server and API that facilitate...

      Responses to user searches

      Maintenance of the database directly via a UI

      Eliminates the need for a command line interface to interact with the database.

    PostgreSQL:
      Used to create and manage database


## License
MIT