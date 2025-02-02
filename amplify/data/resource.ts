import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
  .schema({
    Note: a
      .model({
        id: a.id(),
        title: a.string(),
        message: a.string(),
        image: a.string(),
        user: a.belongsTo("UserProfile", "id")
      })
      .authorization((allow) => [
        allow.owner()
      ]),
    UserProfile: a
      .model({
        id: a.id(),
        email: a.string(),
        profileOwner: a.string(),
        notes: a.hasMany("Note", "id"),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("profileOwner"),
      ]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});