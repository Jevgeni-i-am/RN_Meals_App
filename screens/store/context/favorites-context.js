import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },

})



export default function FavoritesContextProvider({ children }) {

    const [faviriteMealIds, setFaviriteMealIds] = useState([])
    function addFavorite(id) {
        setFaviriteMealIds((currentFavIds) => [...currentFavIds, id])
    }

    // will filter out this meal id what we got here as a parametr
    function removeFavorite(id) {
        setFaviriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id))
    }

    const value = {
        ids:faviriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}