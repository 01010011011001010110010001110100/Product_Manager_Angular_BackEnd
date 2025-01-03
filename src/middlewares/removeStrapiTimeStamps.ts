export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.method === 'GET' && ctx.response.body) {
      const data = getData(ctx);
      if(isArray(data))
      {
        data.map(item => removeTimeStamps(item));
      }
      if(isObject(data))
      {
        removeTimeStamps(data);
      }
    }
  };
};

function removeTimeStamps(item: any): void {
  delete item.createdAt;
  delete item.updatedAt;
  delete item.publishedAt;
}

function isArray(value: any): boolean {
  return value instanceof Array;
}

function isObject(value: any): boolean {
  return typeof value == 'object';
}

function getData(ctx: any): any {
  return ctx.response.body.data;
}