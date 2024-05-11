import {useMemo} from "react";

export const useSortedDishes = (dishs, sort) => {
    const sortedDishes = useMemo(() => {
        if(sort) {
            return [...dishs].sort((a, b) => a[sort]?.localeCompare(b[sort]))
        }
        return dishs
        // .filter(dish => dish.dishCategory != 'STOPPED')
        ;
    }, [sort, dishs])

    return sortedDishes;
}

export const useDishes = (dishs, sort, query) => {
    const sortedDishes = useSortedDishes(dishs, sort).filter(dish => dish.dishCategory != 'STOPPED');

    const sortedAndSearchedDishes = useMemo(() => {
        return sortedDishes.filter(dish => dish?.title?.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedDishes])

    return sortedAndSearchedDishes;
}

export const useStoppedDishes = (dishs, sort, query) => {
    const sortedDishes = useSortedDishes(dishs, sort);

    const sortedAndSearchedDishes = useMemo(() => {
        return sortedDishes.filter(dish => dish?.title?.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedDishes])

    return sortedAndSearchedDishes;
}