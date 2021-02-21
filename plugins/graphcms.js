import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/ckl97gntcq0s401yw5fip55r9/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};
