# Instrument-Search

  A single page web application built with React, Node, and PostgreSQL. 

## Introduction

  Checkout a live demo of the app's main search feature:
  https://orchestral-instrument-database.herokuapp.com

## Description

1. Get information about a single instrument.  
For example, searching for by name will yield Trumpet's unique traits.

        Name: Trumpet  
        Family:  
        Clef:    
  
       ..will result in:
     
        family: Brass
        pitch: B-flat
        sounds at: M2 lower ..(relative to concert pitch)
        transposes: M2 higher ..(to match concert pitch)
        reads Treble Clef 

  
2. Get information about a group of instruments.  

        Name: 
        Family: Strings
        Clef:

        ..will result in:

        Harpsichord
        Violin
        Cello
        Viola
        Harp
        Double Bass
        Guitar  

The list includes all instruments that are a part of the strings family. --along with the instrument's name, each instrument's unique traits will also be displayed.--  
  
3. Likewise, searching by multiple fields will yield the instruments that meet both criteria.  

        Name: 
        Family: Strings
        Clef: Treble  

        ..will results in:

        Violin
        Guitar

        ..The results of instruments that are both in the strings family and read treble clef.

## Technologies Used
 
1. React.js  
  *Main Search UI    
  *Admin UI  

2. Node.js  
  *Used Node along with Express.js to write a simple server that supports an API to handle database queries and give back JSON to client side requests. 

3. PostgreSQL  
      Database


## License
