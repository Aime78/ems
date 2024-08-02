import { Infinity } from 'lucide-react';
const loading = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Infinity className="h-6 w-6" />
      <span>EMS</span>
    </div>
  );
};

export default loading;
