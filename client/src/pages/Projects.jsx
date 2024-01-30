import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>
        Portfolio
      </h1>
      <p className='text-md text-gary-500'>
        Want to know more about me , do check out my portfolio here!!
      </p>
      <CallToAction />
    </div>
  )
}
