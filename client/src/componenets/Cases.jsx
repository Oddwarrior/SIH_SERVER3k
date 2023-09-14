import React from 'react'
import CaseCard from './CaseCard';

const Cases = () => {
    const caseList = [
        {
            caseID: 123,
            files: ['https://38076758600cb3ddbbba19ce331db7b6.ipfscdn.io/ipfs/bafybeidfh6n7efhfuljvrousd7fgz6dhauyqvyuyxjqqv53zzrmnxsvwre/0', 'https://38076758600cb3ddbbba19ce331db7b6.ipfscdn.io/ipfs/bafybeidfh6n7efhfuljvrousd7fgz6dhauyqvyuyxjqqv53zzrmnxsvwre/0'],
            plantiff: 'Rohan',
            defender: 'Laukik',
            status: false
        },
        {
            caseID: 234,
            files: ['https://38076758600cb3ddbbba19ce331db7b6.ipfscdn.io/ipfs/bafybeidfh6n7efhfuljvrousd7fgz6dhauyqvyuyxjqqv53zzrmnxsvwre/0', 'https://38076758600cb3ddbbba19ce331db7b6.ipfscdn.io/ipfs/bafybeidfh6n7efhfuljvrousd7fgz6dhauyqvyuyxjqqv53zzrmnxsvwre/0'],
            plantiff: 'Guru',
            defender: 'Ruchi',
            status: false
        },
        {
            caseID: 345,
            files: ['https://38076758600cb3ddbbba19ce331db7b6.ipfscdn.io/ipfs/bafybeidfh6n7efhfuljvrousd7fgz6dhauyqvyuyxjqqv53zzrmnxsvwre/0'],
            plantiff: 'Shashank',
            defender: 'Sandeep',
            status: false
        },
    ]

    return (
        <div >
            <h1 className=' py-2 font-extrabold uppercase text-xl'>Cases</h1>
            <div className=' flex flex-col gap-4 mt-2'>
                {caseList.map((caseData, index) => (
                    <CaseCard key={index} caseData={caseData} />
                ))}
            </div>
        </div>
    )
}

export default Cases