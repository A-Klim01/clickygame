import React from "react"
import data from "../../data.json"

class Game extends React.Component{
    state= {
        data, 
        score:0,
        topScore:0
    }
   //component DidMount
   
   //func for handle correct guess
   handleCorrectGuess= newData => {
       const { topScore, score } = this.state
       const newScore = score + 1
       const newTopScore = Math.max(newScore, topScore)

       this.setState({
           data:this.shuffleData (newData),
           score:newScore,
           topScore: newTopScore  
       })
   }

   //func to handle incorrect guess

   //function to reset game
    resetData= data => {
        const resetData= data.map(item=> ({...item, clicked:false}))
        return this.shuffleData(resetData)
    }

   //function to shuffle our data
   shuffleData= data => {
    let i= data.length -1;
    while (i>0) {
        const a= Math.floor (Math.random() * (i+1))
        const temp = data[i]
        data[i] = data[a]
        data[a] = temp
        i--;
    }
   }

   //function to handle item click -click.js

   //render return

}

//export game component
