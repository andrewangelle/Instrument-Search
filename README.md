# Instrument-Search

  A single page web application built with React, Node, and PostgreSQL. 

## Introduction

  Checkout a live demo of the app's main search feature:
  https://orchestral-instrument-database.herokuapp.com

## Description

1. Get information about a single instrument.  
For example, searching for by name will yield Trumpet's unique traits.

![screenshot-name-results](images/Tuba.jpg)

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

![screenshot-family-results](images/strings.jpg)  

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

![screenshot-family-clef-results](images/strings-treble.jpg)

        Name: 
        Family: Strings
        Clef: Treble  

        ..will results in:

        Violin
        Guitar

        ..The results of instruments that are both in the strings family and read treble clef.

## Technologies Used
 
### React.js
* Front-end  
* Main Search UI    
* Admin UI  

### Node.js  
* Simple server with API that gives back JSON to client side requests

#### API

##### REST Routes

###### Search Route
*`GET /api/search`
  * `?name=$name`
  * `?family=$family`
  * `?clef=$clef`

###### Instrument Routes
* `GET /api/family`
  * returns all possible families
* `GET /api/clefs`
  * returns all possible clefs
* `GET /api/sounds`
  * returns all possible 'sounds at' parameters
* `GET /api/transposes`
  * returns all possible 'transposes by' parameters

###### Admin Routes
* `POST /instrument/update`
* `GET /instrument/create`
* `GET /instrument/delete`

### PostgreSQL  
* Database


## License
