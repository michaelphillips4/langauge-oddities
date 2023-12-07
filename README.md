# Language Oddities 
Is a fairly simple application to create poems.<br />
It creates grammatically correct nonsense poems.<br />
> Inspired by an article by Noam Chomsky on grammar validating meaning. 

## Overview 
The data set it uses to create a poem are in the file SentenceParts.json ```src/data/SentenceParts.json```.<br />
The main program PoemMachine.tsx this exports the method ```createPoem()```<br />
This will set the number of lines in the poem between 4 and 10. <br />
It then randomly choses 1 of the 6 sentence formats. <br />
Values from the dataset are then randomly merged into sentence. <br /> 


## Tech stack
This uses the react frame work https://react.dev/ using the vite https://vitejs.dev/ and type script <br />
It is deployed to AWS using amplify linked to this github account.<br />
> I uses the simple css frame work for the style https://simplecss.org/ it is classless and allows you to create smart pages quickly with out the distraction of styles.


