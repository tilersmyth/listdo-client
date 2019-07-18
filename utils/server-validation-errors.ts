import { GraphQLError } from "graphql";

interface ValidationError extends Error {
  graphQLErrors: GraphQLError[];
}

type Validation = { [key: string]: string };

export const serverValidationErrors = (
  errors: ValidationError
): Validation | null => {
  const { extensions } = errors.graphQLErrors[0];

  if (!extensions) {
    return null;
  }

  return Object.entries(extensions.exception.errors).reduce(
    (acc: Validation, [key, val]: any) => {
      return { [key]: val.message, ...acc };
    },
    {}
  );
};
