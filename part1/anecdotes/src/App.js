import React, { useState } from 'react'

export default function Anecdotes(props) {
  var anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  var [value, setValue] = useState(Math.floor(Math.random() * anecdotes.length));
  var [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  var updateAnecdotes = () => {
    setValue([Math.floor(Math.random() * anecdotes.length)]);
  }
  var updateVotes = () => {
    let copy = [...votes];
    copy[value] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <h1>{anecdotes[value]}</h1>
      <h4>has {votes[value]} votes</h4>
      <button onClick={updateVotes}>vote</button>
      <button onClick={updateAnecdotes}>next anecdotes</button>
    </div>
  )
}
