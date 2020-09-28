import React from 'react'

export default function part1() {
    const part = {
        name: 'Using props to pass data',
        exercises: 7
    }
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    )
}
