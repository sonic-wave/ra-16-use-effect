import React, { useState, useEffect } from 'react'

export interface DetailsProps {
    id: number,
    name: string,
    avatar?: string,
    details?: {
        city: string,
        company: string,
        position: string
    }
}

export const Details: React.FC<{ info: DetailsProps | null }> = ({ info }) => {
    const [details, setDetails] = useState<DetailsProps | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!info) return;

        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
            const result = await response.json();
            setDetails(result)
            setLoading(false);
        }
        fetchData();

    }, [info]);

    if (!details || !details.details || !info) {
        return null;
    }

    if (loading === true) {
        return <div>Loading...</div>
    }

    return (
        <div className='details-container'>
            <img className='details-avatar' src={details.avatar} alt={details.name} />
            <div className='details-title'>{details.name}</div>
            <div className='details-city'>{details.details.city}</div>
            <div className='details-company'>{details.details.company}</div>
            <div className='details-position'>{details.details.position}</div>
        </div>
    )
}
