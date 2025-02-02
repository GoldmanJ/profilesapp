/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $condition: ModelNoteConditionInput
    $input: CreateNoteInput!
  ) {
    createNote(condition: $condition, input: $input) {
      createdAt
      id
      image
      message
      owner
      title
      updatedAt
      user {
        createdAt
        email
        id
        profileOwner
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: CreateUserProfileInput!
  ) {
    createUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      id
      notes {
        nextToken
        __typename
      }
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $condition: ModelNoteConditionInput
    $input: DeleteNoteInput!
  ) {
    deleteNote(condition: $condition, input: $input) {
      createdAt
      id
      image
      message
      owner
      title
      updatedAt
      user {
        createdAt
        email
        id
        profileOwner
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: DeleteUserProfileInput!
  ) {
    deleteUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      id
      notes {
        nextToken
        __typename
      }
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $condition: ModelNoteConditionInput
    $input: UpdateNoteInput!
  ) {
    updateNote(condition: $condition, input: $input) {
      createdAt
      id
      image
      message
      owner
      title
      updatedAt
      user {
        createdAt
        email
        id
        profileOwner
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(condition: $condition, input: $input) {
      createdAt
      email
      id
      notes {
        nextToken
        __typename
      }
      profileOwner
      updatedAt
      __typename
    }
  }
`;
