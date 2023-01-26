exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/sponsor",
    toPath: "/sponsor.pdf",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/promo",
    toPath:
      "https://docs.google.com/document/d/1ly4fqNVvxZSvoVW3NTE5NoVtvD6nj2czLc7J1EUbNtY/edit?usp=sharing",
  })
  createRedirect({
    fromPath: "/waiver",
    toPath: "/waiver.pdf",
    isPermanent: true,
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "GoogleSpreadsheetSchedule",
      fields: {
        startTime: {
          type: "String!",
          resolve: source => (source.startTime == null ? "" : source.startTime),
        },
        endTime: {
          type: "String!",
          resolve: source => (source.endTime == null ? "" : source.endTime),
        },
        description: {
          type: "String!",
          resolve: source =>
            source.description == null ? "" : source.description,
        },
        company: {
          type: "String!",
          resolve: source => (source.company == null ? "" : source.company),
        },
        prize: {
          type: "String!",
          resolve: source => (source.prize == null ? "" : source.prize),
        },
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}
