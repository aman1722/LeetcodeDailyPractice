var numSimilarGroups = function(strs) {
	const isSimilarStr = (str, st2) => {
		let str1 = '', str2 = '';
		for (let j = 0; j < str.length; j++) {
			if (str[j] !== st2[j]) {
				if (!str1) str1 = st2[j], str2 = str[j];
				else if (str1 !== str[j] || str2 !== st2[j]) return false;
			}
		}
		return true;
	}
	const visited = new Set();
	const helper = index => {
		visited.add(index);
		for (let j = 0; j < strs.length; j++) {
			if (visited.has(j)) continue;
			if (isSimilarStr(strs[index], strs[j])) helper(j);
		}
	}
	let count = 0;
	for (let j = 0; j < strs.length; j++) {
		if (!visited.has(j)) { helper(j); count++;}
	}
	return count;
};