import React from 'react'

export default function part1() {
    const part = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    )
}
