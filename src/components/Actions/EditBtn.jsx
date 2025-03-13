import { Pencil } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const EditBtn = ({editEndpoint, title}) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    return (
        <Link href={`${baseurl}/dashboard/${editEndpoint}`} className='flex items-center space-x-1 text-lime-600'>
            <Pencil className='w-4 h-4'/>
            <span>Edit {title}</span>
        </Link>
    );
};

export default EditBtn;