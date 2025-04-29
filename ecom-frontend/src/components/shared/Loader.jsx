
import { RotatingLines } from 'react-loader-spinner';

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center'>
        <RotatingLines 
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        <p className='text-slate-800 mt-4'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loader;
