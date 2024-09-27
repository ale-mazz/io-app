/**
 * Mocked version of the BackendClient.
 */
export const BackendClient = {
  getMessage: jest.fn(),
  getMessages: jest.fn(),
  getSession: jest.fn(),
  getService: jest.fn(),
  getProfile: jest.fn(),
  getThirdPartyMessagePrecondition: jest.fn(),
  upsertMessageStatusAttributes: jest.fn()
};
