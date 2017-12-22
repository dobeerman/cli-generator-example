
//!code: imports //!end
//!code: init //!end

let schema = {
  $schema: 'http://json-schema.org/draft-05/schema',
  //!code: schema_header
  title: 'Post1',
  description: 'Post database.',
  //!end
  type: 'object',
  required: [
    //!code: schema_required //!end
  ],
  properties: {
    //!code: schema_properties
    id: { type: 'ID' },
    _id: { type: 'ID' },
    uuid: { type: 'ID' },
    authorUuid: { type: 'ID' },
    body: {},
    draft: { type: 'integer' },
    //!end
  },
  //!code: schema_more //!end
};

let extensions = {
  graphql: {
    //!code: graphql_header
    name: 'Post',
    service: {
      sort: { uuid: 1 },
    },
    sql: {
      sqlTable: 'Posts',
      uniqueKey: 'uuid',
      sqlColumn: {
        authorUuid: 'author_uuid',
      },
    },
    //!end
    discard: [
      //!code: graphql_discard //!end
    ],
    add: {
      //!code: graphql_add
      author: { type: 'User!', args: false, relation: { ourTable: 'authorUuid', otherTable: 'uuid' } },
      comments: { type: '[Comment!]', args: false, relation: { ourTable: 'uuid', otherTable: 'postUuid' } },
      //!end
    },
    //!code: extension_more //!end
  },
};

//!code: more //!end

let moduleExports = {
  schema,
  extensions,
  //!code: moduleExports //!end
};

//!code: exports //!end
module.exports = moduleExports;

//!code: funcs //!end
//!code: end //!end
