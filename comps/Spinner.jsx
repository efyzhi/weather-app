import React from 'react';
import spinner from '../public/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <Image className='w-[200px] m-auto black' src={spinner} alt='loading..' />
        </div>
    )
}

export default Spinner