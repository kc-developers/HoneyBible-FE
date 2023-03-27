import { rest } from 'msw';

export const handlers = [
	rest.get('https://localhost:8080/api/admin', async (req, res, ctx) => {
		return res(
			ctx.json({
				dates: ['20230327', '20230328', '20230329', '20230330'],
				datas: [
					{
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
];
