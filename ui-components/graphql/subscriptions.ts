/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
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
