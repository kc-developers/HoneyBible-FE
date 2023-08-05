import { rest } from 'msw';

const members = [{ name: '추희승', age: '97' }];

export const handlers = [
	rest.get('https://localhost:8080/api/admin', async (req, res, ctx) => {
		return res(
			ctx.json({
				dates: ['20230327', '20230328', '20230329', '20230330'],
				datas: [
					{
						id: 0,
						name: '추희승',
						age: '98',
						dateNum: 4,
						datas: {
							20230327: 'O',
							20230328: 'O',
							20230329: 'O',
							20230330: 'O',
						},
					},
					{
						id: 1,
						name: '추희승',
						age: '98',
						dateNum: 4,
						datas: {
							20230327: 'O',
							20230328: 'O',
							20230329: 'O',
							20230330: 'O',
						},
					},
					{
						id: 2,
						name: '추희승',
						age: '98',
						dateNum: 4,
						datas: {
							20230327: 'O',
							20230328: 'O',
							20230329: 'O',
							20230330: 'O',
						},
					},
					{
						id: 3,
						name: '추희승',
						age: '98',
						dateNum: 4,
						datas: {
							20230327: 'O',
							20230328: 'O',
							20230329: 'O',
							20230330: 'O',
						},
					},
				],
			})
		);
	}),
	rest.post('https://localhost:8080/auth/join', async (req, res, ctx) => {
		members.push({ name: req.name, age: req.age });

		return res(ctx.status(201));
	}),
];
