import { rest } from 'msw';

export const handlers = [
	rest.get('https://localhost:8080/api/admin', async (req, res, ctx) => {
		return res(
			ctx.json({
				data: [],
			})
		);
	}),
];
