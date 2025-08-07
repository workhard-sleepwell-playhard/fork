import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
[selectCategoryReducer], //what i want the selector to return back 
(categoriesSlice) => categoriesSlice.categories

// output of selectCategoryReducer because the argument. This function will only run when categoriesSlice input changes 
) 
//creates a slice of the categories 

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => 

 categories.reduce((acc, category) => {
        const {title, items } = category;
       acc[title.toLowerCase()] = items;
        return acc;
    // create the doc object from the categories array 
 }, {} )
)
    // createSelector to use trhe slice of catergoires 
