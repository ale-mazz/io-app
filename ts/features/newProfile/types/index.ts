/**
 * NewProfile is the type of the object that represents a new user profile
 * @name the name of the user
 * @fiscalCode fiscal code of the user
 * @email email of the user
 */
type NewProfile = {
  name: string;
  email: string;
  fiscalCode: string;
};

export default NewProfile;
