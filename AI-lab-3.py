def aStarAlgo(start_node, stop_node):
    l = set()
    l.add(start_node)
    open_set = l
    closed_set = set()
    g = {}  # store distance from starting node
    parents = {}  # parents contains an adjacency map of all nodes
    # distance of starting node from itself is zero
    g[start_node] = 0
    # start_node is root node i.e it has no parent nodes
    # so start_node is set to its own parent node
    parents[start_node] = start_node
    while open_set:
        n = None
        for v in open_set:
            if n == None or g[v] + heuristic[v] < g[n] + heuristic[n]:
                n = v
        if not (n == stop_node or Graph_nodes[n] == None):
            for (m, weight) in get_neighbors(n):
                # nodes 'm' not in first and last set are added to first
                # n is set its parent
                if m not in open_set and m not in closed_set:
                    open_set.add(m)
                    parents[m] = n
                    g[m] = g[n] + weight
 
                # for each node m,compare its distance from start i.e g(m) to the
                # from start through n node
                elif g[m] > g[n] + weight:
                    # update g(m)
                    g[m] = g[n] + weight
                    # change parent of m to n
                    parents[m] = n
 
                    # if m in closed set, remove and add to open
                    if m in closed_set:
                        closed_set.remove(m)
                        open_set.add(m)
 
        if n == None:
            return print("Path does not exist!")
        # if the current node is the stop_node
        # then we begin reconstruction the path from it to the start_node
        if n == stop_node:
            path = []
            while parents[n] != n:
                path.append(n)
                n = parents[n]
            path.append(start_node)
            path.reverse()
            print(f"Path found: {path}")
            return path
        # remove n from the open_list, and add it to closed_list
        # because all of his neighbors were inspected
        open_set.remove(n)
        closed_set.add(n)
 
    return print("Path does not exist!")
 
 
def get_neighbors(v):
    return Graph_nodes[v] if v in Graph_nodes else None
 
 
#for simplicity we ll consider heuristic distances given
#and this function returns heuristic distance for all nodes
 
heuristic = {
    "Foundations of AI": 11,
    "Deep Learning": 6,
    "Machine Learning Essentials": 99,
    "Neural Networks": 1,
    "NLP": 7,
    "Advanced AI": 0,
    "Statistics for AI": 9,
}
 
#Describe your graph here
# A - found of AI
# B - Deep learning
# C - ML
#
Graph_nodes = {
    'Foundations of AI': [('Deep Learning', 2), ('Machine Learning Essentials', 3)],
    'Deep Learning': [('Neural Networks', 1),('Machine Learning Essentials', 9)],
    'Neural Networks': [('NLP', 1)],
    'NLP': [('Advanced AI', 6)],
    'Advanced AI': [('Statistics for AI', 1)],  
}
 
aStarAlgo('Foundations of AI', 'NLP')
