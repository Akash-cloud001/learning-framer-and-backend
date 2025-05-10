import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='w-full flex flex-col gap-8 items-center justify-center'>
        Course Page
        <ul>
          <li><Link href={'/course/course-details/course-1'}>course-1</Link></li>
          <li><Link href={'/course/course-details/course-2'}>course-2</Link></li>
          <li><Link href={'/course/course-details/course-3'}>course-3</Link></li>
        </ul>
    </section>
  )
}

export default page