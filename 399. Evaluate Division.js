var calcEquation = function(equations, values, queries) {
	const map = equations.reduce((result, [a, b], index) => {
		const value = values[index];
		const valueA = result.get(a) ?? [];
		const valueB = result.get(b) ?? [];

		valueA.push([b, value]);
		valueB.push([a, 1 / value]);
		result.set(a, valueA);
		result.set(b, valueB);
		return result;
	}, new Map());

	const dfs = ([a, b], visited = new Set(), current = 1) => {
		if (!map.has(a) || !map.has(b)) return -1;
		if (a === b) return current;
		const values = map.get(a);
		visited.add(a);

		for (const [key, value] of values) {
			if (visited.has(key)) continue;
			const nextValue = current * value;

			const result = dfs([key, b], visited, nextValue);
			if (result !== null) return result;
		}
		return null;
	};

	return queries.map(item => dfs(item) ?? -1);
};