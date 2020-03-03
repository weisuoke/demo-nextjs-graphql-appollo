import dateToString from "../../helpers/dateToString";
import User from "../../models/user";

/**
 * Get user object with schema typing
 * @param id
 */
const getUser = async (id: string) => {
  try {
    const user: any = await User.findById(id);
    return {
      ...user._doc,
      _id: user.id,
      createAt: dateToString(user._doc.createAt),
      updateAt: dateToString(user._doc.updateAt)
    };
  } catch (err) {
    throw err;
  }
};

/**
 * Get user object with schema typing
 * @param user
 */

const transformUser = (user: any) => {
  return {
    ...user._doc,
    _id: user.id,
    createAt: dateToString(user._doc.createAt),
    updateAt: dateToString(user._doc.updateAt)
  };
};

export { getUser, transformUser };
