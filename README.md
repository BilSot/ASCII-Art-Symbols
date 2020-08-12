# ASCII-Art-Symbols

## Project using letters and numbers, represented with ASCII Art text. Implemented in NodeJs

The project can be run with the command `npm start`. 
The main components of this project are:
1. the .txt file, that contains the ACII Art banner text
2. the dictionary (ascii-map.js) , used to map the ASCII code of a character to its position in the banner text.

Once the project is running, as an input, the user needs to give a phrase or a word of his choice for the convertion.
The result is being printed only in capital letters. In case an unknown character is found, a question mark is printed out.

Example with all existing characters (input 'Biljana')

```
 #####   ######  ##      ######   ####   ##  ##   ####  
 ##  ##    ##    ##          ##  ##  ##  ### ##  ##  ## 
 #####     ##    ##          ##  ######  ## ###  ###### 
 ##  ##    ##    ##      ##  ##  ##  ##  ##  ##  ##  ## 
 #####   ######  ######   ####   ##  ##  ##  ##  ##  ##
 ```
 
 Example with the question mark (input 'I l@@k nice')
 ```
  ######          ##        ####    ####  ##  ##          ##  ##  ######   ####   ###### 
   ##            ##       ##  ##  ##  ## ## ##           ### ##    ##    ##  ##  ##     
   ##            ##          ##      ##  ####            ## ###    ##    ##      ####   
   ##            ##         ##      ##   ## ##           ##  ##    ##    ##  ##  ##     
 ######          ######     ##      ##   ##  ##          ##  ##  ######   ####   ###### 
 ```
 
 Example with numbers (input 0123456789)
 ```
    ####     ##     ####   ######      ##  ######    ##    ######   ####    #### 
  ##  ##   ###        ##     ##   ##  ##  ##       ##        ##   ##  ##  ##  ##
  ######    ##     ####     ###   ######   ####   #####     ##     ####    #### 
  ##  ##    ##    ##          ##      ##      ##  ##  ##   ##     ##  ##    ##  
   ####   ######  ######  #####       ##  #####    ####   ##       ####    ##   
   ```
