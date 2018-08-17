export default [
	{
		input: ['src/main-a.js', 'src/main-b.js'],
		output: {
			dir: 'public',
			format: 'cjs',
		},
		experimentalCodeSplitting: true,
	}
];
