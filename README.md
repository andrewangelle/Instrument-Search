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

        ..will result in:

        Violin
        Guitar

## Technologies Used
 
1. React.js  
        *Main Search UI  
        *Admin UI  

2. Node.js  
        *Used Node along with Express.js to write a simple server, and a straight forward API to support client side requests with endpoints as follows... 
      *  
```javascript
//single endpoint for all search requests.
router.get('/search', (req,res) =>{})

//used to prepopulate form options for user
router.get('/families', (req,res) =>{})
router.get('/clefs',  (req,res) =>{})
router.get('/sounds', (req,res) =>{})
router.get('/transposes', (req,res) =>{})

//endpoints accessible to Admin UI
//makes database maintenance simple and straightforward.
router.post('/instrument/update', (req,res) =>{})
router.put('/instrument/create', (req,res) =>{})
router.delete('/instrument/delete', (req,res) =>{})
```
3. PostgreSQL  
      Database


## License
MIT