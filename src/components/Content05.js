import thankYouImg from '../images/icon-thank-you.svg'
import { useNavigate } from 'react-router-dom';

export default function Content05() {
    const navigate = useNavigate();

    const clickListener = () => {
        navigate("..");
        window.location.reload();
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <div className='px-7 flex flex-col items-center justify-center text-center'>
                <img src={thankYouImg} alt="" className='w-[75px] my-3' />
                <p className='my-3 font-bold text-[26px] text-marine-blue'>Thank You!</p>
                <p className='my-2 text-[14px] text-cool-gray'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaing.com</p>
            </div>
            <button type="button" className=' text-extra-light-gray bg-marine-blue px-[18px] py-[10px] rounded-lg hover:bg-marine-light-blue duration-200 mt-8' onClick={() => clickListener()} >Return To Main Menu</button>
        </div>
    )
}
