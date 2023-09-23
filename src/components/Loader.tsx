// import loader from '../images/loader.png'
import loader from './Loader/loader.gif'

const Loader = () => {

    return (
        <>
            <div className='flex items-center justify-center w-full h-screen'>
                <img src={loader} className="animate-pulse w-32" />
            </div>
        </>
    )
}

export default Loader