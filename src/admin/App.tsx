import React, { useEffect, useState } from "react";
import { Admin, Resource, DataProvider } from "react-admin";
import { useApolloClient } from "@apollo/react-hooks";
import pgDataProvider from "ra-postgraphile";

import { PostList, PostEdit, PostCreate } from "@/components/posts";

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const client = useApolloClient();

  useEffect(() => {
    pgDataProvider(client).then((dp) => setDataProvider(dp));
  }, []);

  return (
    dataProvider && (
      <Admin dataProvider={dataProvider}>
        <Resource name="Posts" list={PostList} edit={PostEdit} create={PostCreate} />
      </Admin>
    )
  );
};

export default App;
