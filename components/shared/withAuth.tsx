import React from "react";
import {
  MeQuery,
  MeDocument,
  UserDto
} from "../../apollo/generated-components";
import { NextContextWithApollo } from "../../types/NextContextWithApollo";
import redirect from "../../apollo/redirect";

export const withAuth = <T extends object>(
  C: React.ComponentType<T>
): React.ComponentType<T> => {
  return class AuthComponent extends React.Component<T> {
    static async getInitialProps({
      apolloClient,
      ...ctx
    }: NextContextWithApollo): Promise<{ me: UserDto | null }> {
      try {
        const { data } = await apolloClient.query<MeQuery>({
          query: MeDocument
        });

        if (!data || !data.me) {
          throw Error("not authorized");
        }

        return {
          me: data.me
        };
      } catch (err) {
        redirect(ctx, "/login");
        return {
          me: null
        };
      }
    }

    render(): JSX.Element {
      return <C {...this.props} />;
    }
  };
};
