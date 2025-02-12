import { rest } from 'msw';

import { umbracoPath } from '@umbraco-cms/backoffice/utils';
import type { ProfilingStatusResponseModel } from '@umbraco-cms/backoffice/backend-api';

export const handlers = [
	rest.get(umbracoPath('/profiling/status'), (_req, res, ctx) => {
		return res(
			// Respond with a 200 status code
			ctx.status(200),
			ctx.json<ProfilingStatusResponseModel>({ enabled: true })
		);
	}),
];
