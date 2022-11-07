// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	items: ListItem[]
}

type ListItem = {
	id: string,
	name: string,
	createdAt: string,
	updatedAt: string,
	dueAt: string,
	isDone: boolean,
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({items: [
		{
			id: 'test-id-123456',
			name: 'Test Item',
			createdAt: '2021-01-01T00:00:00.000Z',
			dueAt: '2021-01-09T00:00:00.000Z',
			isDone: false,
			updatedAt: '2021-01-01T00:00:00.000Z'
		} ]
	})
}