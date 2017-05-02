# Instrument-Search

  A single page web application built with React, Node, and PostgreSQL. 

## Introduction

  Checkout a live demo of the app's main search feature:
  https://orchestral-instrument-database.herokuapp.com

## Description

  1. Get information about a single instrument.
  Searching...

      Name: Trumpet
      Family:
      Clef:

  ...will yield Trumpet's unique traits.
     
      family: Brass
      pitch: B-flat
      sounds at: M2 lower ..(relative to concert pitch)
      transposes: M2 higher ..(to match concert pitch)
      reads Treble Clef 

  
  2. Get information about a group of instruments
  Searching...

      Name: 
      Family: Strings
      Clef:

  will yield all instruments that are a part of the strings family
  ,along with each instrument's unique traits.

      Harpsichord
      Violin
      Cello
      Viola
      Harp
      Double Bass
      Guitar
  
  Likewise, searching by multiple fields...

      Name: 
      Family: Strings
      Clef: Treble

  will yield the instruments that are a part of the strings family and also read treble clef.

      Violin
      Guitar

## Technologies Used
 
  React.js
      Main Search UI
      Admin UI for database maintenance

  Node.js/Express.js
      Server and API

  PostgreSQL
      Database


## License
MIT