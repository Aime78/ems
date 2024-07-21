import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts';

export const saltAndHashPassword = (password: string) => {
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  return hashedPassword;
};

export const compareHashedPassword = (
  password: string,
  hashedPassword: string
) => compareSync(password, hashedPassword as string);
