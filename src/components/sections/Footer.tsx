import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import SocialIcons from '../SocialIcons'

export default function Footer() {
    return (
        <footer className="w-full md:flex flex-row justify-between items-center h-20 mt-20 mb-10">
            <div className='sm:flex flex-row items-center md:gap-10 font-semibold'>
                <div className='flex flex-row items-center gap-2'>
                    <MdEmail size={20} color={'#708DB6'} />
                    <h6 className=''>tadeumelembe@gmail.com</h6>
                </div>
                <div className='flex flex-row items-center gap-2 mt-8 sm:mt-0'>
                    <BsFillTelephoneFill color={'#708DB6'} />
                    <h6 className=''>+258 820 896 638</h6>
                </div>
            </div>
            <div className="mt-5 md:mt-0 ml-[-12px] flex">
                <SocialIcons />
            </div>
        </footer>
    )
}