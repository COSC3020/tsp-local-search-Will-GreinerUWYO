# Traveling Salesperson Problem -- Local Search

This exercise is about the Traveling Salesperson Problem I mentioned in the
lecture on NP-hard problems -- given a set of cities, determine the length of
the shortest tour that visits all of them. We can get from any city to any other
city, i.e. the graph of cities is completely connected. We consider the version
of the Traveling Salesperson Problem that finds the shortest tour to visit $n$
cities, starting at a city and ending at the $n$ th city; it *does not* go
back to the start. The start city may be any of the cities. Remember that the
graph for a TSP is undirected, i.e. the cost is the same in either direction.

The 2-opt algorithm for solving the Traveling Salesperson Problem is a
randomized local search algorithm that, at each iteration, reverses part of the
route. It starts with a random route (this is the randomized part), and changes
part of the route in each step (this is the local search part, sprinkled with
more randomness). The pseudocode for one iteration is as follows:

```javascript
2optSwap(route, i, k)
  cities 1 to i-1 stay in the order they are
  cities i to k are reversed
  cities k + 1 to n stay in the order they are
```

For example, if I call the above function with route A--B--C--D--E--F, $i=2$,
$k=4$, the resulting route is A--B--E--D--C--F.

The algorithm starts with a random route; if the new route at the end of an
iteration decreases the total length, it is retained as the current incumbent.
The incumbent after the final iteration is returned as the solution.

Implement the 2-opt algorithm, which repeatedly runs the above steps. Your
implementation needs to fix two design parameters that I have left open. First,
you need to design a stopping criterion -- when would it make sense to stop and
return the shortest route found so far rather than trying another iteration?
Second, design a way to choose $i$ and $k$ -- note that they need to be
different in subsequent iterations, as one iteration would simply undo what
the previous one did otherwise. Start with the template I provided in `code.js`.
Describe in your code how you designed your stopping criterion and ways of
choosing $i$ and $k$ and why.

The function takes a distance matrix (the adjacency matrix for the graph where
the values in the cells are the distances between the corresponding cities) and
returns the length of the shortest tour (not the tour itself).

Test your new function; I've provided some basic testing code in `code.test.js`.

## Runtime Analysis

What is the worst-case asymptotic time complexity of your implementation? What
is the worst-case asymptotic memory complexity? Add your answer, including your
reasoning, to this markdown file.

The worst case scenario for my implementation is $\Theta(n * (n-2) ^ 2 )$

This is because the main loop runs for n-1 times, and its main nested loop, so the loop for i and k respectively, are each run for n-2 times, with both ignoring the starting node, i ignoring the end, and k ignoring i's first node. Each time, the route is reversed and the distance is calculated, thats another n times. This makes the total time complexity $\Theta(n * (n-2) ^ 2)$

## Sources and Plagarism Statement
I worked with Lily Brongo to help me with figuring out how to accurately calculate distances. Worked with Michael Stoll to help understand the concepts of the TSP problem and how this solution worked to help solve the problem.

I accessed the following external sources for additional support, including helping me determine how to find an i and k value. [University of Southern Denmark](https://dm865.github.io/assets/dm865-tsp-ls-handout.pdf) and helping me understand the fundamental TSP problem [Luis Izquierdo](https://www.youtube.com/watch?v=mQ9tCn3vxHw&ab_channel=LuisR.Izquierdo)
Also this amazing deep dive video I found going into the TSP problem on a deep level, which also covered a ton of extra concepts [Reducible](https://www.youtube.com/watch?v=GiDsjIBOVoA&t=28s&ab_channel=Reducible)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
