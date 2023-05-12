import { Response } from "miragejs";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/types
 * */

export const getAllTypesHandler = function () {
  try {
    return new Response(200, {}, { types: this.db.types });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/user/type/:typeId
 * */

export const getTypeHandler = function (schema, request) {
  const typeId = request.params.typeId;
  try {
    const type = schema.types.findBy({ _id: typeId });
    return new Response(200, {}, { type });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
