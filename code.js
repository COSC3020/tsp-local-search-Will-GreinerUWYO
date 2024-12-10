function tsp_ls(distance_matrix) {
    let cities = distance_matrix.length;
    // if empty, return 0
    if(cities === 0 || cities === 1) {
        return 0;
    }
    // finds initial route and that route's best distance
    let bestRoute = randomizeRoute(cities);
    let bestDistance = distance(distance_matrix, bestRoute);

    // this iterates through the loop, allowing to check almost all permutations of the cities. It ignores the starting city, and allows always at least one node to swap.
    for(let i = 1; i < cities - 1; i++){
        for(let k = i + 1; k < cities; k++){
            // reverses the middle chunk
            let newRoute = reverse(bestRoute, i, k);
            // finds the distance of the current route
            let newDistance = distance(distance_matrix, bestRoute);
            // if the distance is better, replace it as the bestRoute and bestDistance
            if (newDistance < bestDistance) {
                bestRoute = newRoute;
                bestDistance = newDistance;
            }
        }
    }
    return bestDistance;
}

// finds the initial randomized route
function randomizeRoute(cities){
    // picks a random city for our starting location
    let startCity = Math.floor(Math.random() * cities);
    // initializes our route variable
    let startRoute = [startCity];
    // until the route is filled with cities
    while (startRoute.length < cities) {
        // pushes a city which is not yet in the route into the array
        let j = Math.floor(Math.random() * cities);
        if (!startRoute.includes(j)) {
            startRoute.push(j);
        }
    }
    return startRoute;
}

// finds the total distance of the route
function distance(distance_matrix, route){
    let distance = 0;
    // for each city, finds the distance from the distance matrix to the next city
    for (let i = 0; i < route.length - 1; i++) {
        distance = distance + distance_matrix[route[i]][route[i + 1]];
    }
    return distance;
}

// reverses the middle portion of the array
function reverse(path, i, k){
    let newPath = path;
    while(i<k){
        let temp = newPath[i];
        newPath[i] = newPath[k];
        newPath[k] = temp;
        i++;
        k--;
    }
    return newPath;
}
