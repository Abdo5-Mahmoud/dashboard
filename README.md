# Admin Dashboard - Day 1 Notes

## Architecture Overview

### Client Components
Used when:
- User interaction is required (onClick, onChange, forms)
- Hooks like useState, useEffect are needed

### Server Components
Used when:
- Fetching Data
- Rendering Static or SEO- critical content
- Improving performance by avoiding unnecessary JS

### Auth folder 
- It's for the authentication in next and validate the token

### Use Client 
- we use (use client) when we want to transform the server component to a client component 
(look at the cases above)

### Layout 
Used in:
- Accept children pages (the page that nested in)
- doesn't change with navigation so we put the navbar with

### page.tsx
- it's the page that contain the ui and change with the navigation

### Problem

Given two strings, determine if one is an anagram of the other.

  const result = (str1, str2) => {
    let res = false;
    if (str1.length !== str2.length) {
      return res;
    }
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        res = false;
      }
      res = true;
    }
    console.log(res);
    return res;
  };


#### For Cv 
Admin Dashoboad: Scalable Admin Dashboard built with Next.js focusing on cleac architecture, "reusable components", and performance
Used For:
- updating products
- add/delete new products
- analyse the selling



# Admin Dashboard - Day 2 Notes
## Architecture Overview

### Loading.tsx Better than conditional rendering?
- loading.tsx improves perceived performance by allowing streaming and avoiding blocking the entire page render.


### revalidate and cashe:'no-store'
revalidate: the data already in the cashe but it got refetching by constant time or by revalidate tag if it connected by tag

cache(no-store): it's like a real time data the component doesn't get cached and every type it get a new request from the server even if it the same data

### Algo Function

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Time: O(n)
// Space: O(n)
## How the function work: 
- I create a map then I loop of each element if the the compliment of it is in the map i return the indecies of the current and the copmliment,
else i put the current in the map as a value with the key of it's inedex



# Algorithm
## Longest substring without repeating characters.

- we create a set and variable
- we loop on the string 
- we check if the set has the char we delete the left then add the next and repeat
- else we add the char and we get the max length


function longestOfLongestSubstring(s: string) {
  const set = new Set();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

# Interview Prep 

## separation of concerns :
- because it gives us the capability to scale the project and make it more readable also to fix the error without affecting other logic
## abstraction:
-  the abstraction is using somthing without knowing it's inner login and we use it alot in the third parties packeges but if use it more than necessary
it will increas the bundle of js (on the server), but there is simple things we don't need to use abstraction with and also in learning we should have the eager 
to know
## container & component :
- container : it's the container or the wraper than we use to manipulate the element in it (an html tag basicly)
- component : it's a tsx or jsx page that return xml 
## dangerous refactor:
- when we don't have a basic plane
- we did't select the goal 
- we refactor the all code without relizing

# Folder structure
- app
    - (auth)
    - api
    - dashboard
      - products
        - error.tsx
        - loading.tsx
        - page.tsx
      - layout.tsx
      - page.tsx
    - global.css
    - layout.tsx
    - page.tsx
    - components
      - layout
        - Navbar.tsx
        - Sidebar.tsx
      - ui 
        - Button.tsx
        - Pagination.tsx
        - ProductCard.tsx
        - ProductsGrid.tsx
        - ProductSkelton.tsx
        - ProductsList.tsx
        - SideBarLink.tsx
    - hooks
    - lib
    - services
      - productsServices.ts
    - types
      - fetchTypes.ts
      - ProductType.ts
      - propsType.ts
    - utils
