import React from 'react'

const page = async({params}) => {
    const {course_slug} = await params
  return (
    <section>
        <h1>this is single course page & the course is {course_slug} </h1>
    </section>
  )
}

export default page