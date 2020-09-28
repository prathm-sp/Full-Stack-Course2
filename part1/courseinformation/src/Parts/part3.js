import React from 'react'

export default function part1() {
    const part = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    )
}
