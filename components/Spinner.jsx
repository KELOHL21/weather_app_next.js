import spinner from '../public/assets/spinner.gif'
import Image from 'next/image'

const Spinner = () => {
  return (
    <div>
         <Image className='w-[200px] m-auto block' src="/assets/spinner.gif" alt='loading.' />
    </div>
  )
}

export default Spinner