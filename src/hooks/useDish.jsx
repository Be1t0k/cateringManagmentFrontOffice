import {useMemo} from "react";

export const useSortedDishes = (games, sort) => {
    const sortedGames = useMemo(() => {
        if(sort) {
            return [...games].sort((a, b) => a[sort]?.localeCompare(b[sort]))
        }
        return games.filter(game => game.dishCategory != 'STOPPED');
    }, [sort, games])

    return sortedGames;
}

export const useDishes = (games, sort, query) => {
    const sortedGames = useSortedDishes(games, sort).filter(game => game.dishCategory != 'STOPPED');

    const sortedAndSearchedDishes = useMemo(() => {
        return sortedGames.filter(game => game?.title?.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedGames])

    return sortedAndSearchedDishes;
}