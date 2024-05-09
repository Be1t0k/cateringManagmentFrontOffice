import {useMemo} from "react";

export const useSortedGames = (games, sort) => {
    const sortedGames = useMemo(() => {
        if(sort) {
            return [...games].sort((a, b) => a[sort]?.localeCompare(b[sort]))
        }
        return games;
    }, [sort, games])

    return sortedGames;
}

export const useGames = (games, sort, query) => {
    const sortedGames = useSortedGames(games, sort);

    const sortedAndSearchedGames = useMemo(() => {
        return sortedGames.filter(game => game?.title?.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedGames])

    return sortedAndSearchedGames;
}