import React, {useState} from 'react'

export const useFetching = (callback) => {
    const [isLoading, setIsListLoading] = useState(false);
    const [error, setError] = useState('');
    const fetching = async () =>{
        try {
            setIsListLoading(true)
            await callback()
        } catch (error) {
            setError(error.message);
        }
        finally{
            setIsListLoading(false)
        }
    }
    return [fetching, isLoading, error]
}
