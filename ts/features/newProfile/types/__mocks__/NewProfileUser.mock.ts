import NewProfile from "../index";

/**
 * NewProfile is the type of the object that represents a new user profile
 */
export const newProfileUserMock: NewProfile = {
  name: "Mario Rossi",
  email: "mario.rossi@email.it",
  fiscalCode: "MRSSMT801234A01H501A"
};
/**
 * Mock payload for the saga test
 * This is different from the NewProfile type because it comes from the backend
 */
export const sagaPayloadMock = {
  name: "Mario Rossi",
  email: "mario.rossi@email.it",
  fiscal_code: "MRSSMT801234A01H501A"
};
