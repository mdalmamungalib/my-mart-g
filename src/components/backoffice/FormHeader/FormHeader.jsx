import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const FormHeader = ({title}) => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between px-12 py-6 rounded-lg shadow bg-slate-100 dark:bg-slate-600 dark:text-slate-50 text-slate-800">
        <h2>{title}</h2>
        <button onClick={() => router.back()}>
          <X />
        </button>
      </div>
    );
};

export default FormHeader;