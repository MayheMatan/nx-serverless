import { createHandler } from '@app/http/handlers';
import { httpError, httpResponse } from '@app/http/response';

export const main = createHandler(async (event) => {
  try {
    return httpResponse({
      event,
    });
  } catch (e) {
    return httpError(e);
  }
});
