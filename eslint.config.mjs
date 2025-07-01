import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		rules: {
			'@typescript-eslint/no-explicit-any': `off`,
			'@typescript-eslint/no-extraneous-class': `off`,
			'quotes': [`error`, `backtick`, { allowTemplateLiterals: true }],
		},
	},
);
