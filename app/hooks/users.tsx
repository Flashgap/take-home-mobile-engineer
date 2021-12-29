import React from "react";
import { UsersAPI } from "../api";
import { User } from "../models";

interface UsersContextValue {
  /** List of users returned from the server. */
  users: User[];
  /** Load a list of users. */
  loadUsers: () => void;
  /** Dislike a user and go to the next one. */
  dislikeUser: (userId: string) => void;
  /** Like a user and go to the next one. */
  likeUser: (userId: string) => void;
}

const UsersContext = React.createContext<UsersContextValue>({
  users: [],
  loadUsers: () => {},
  dislikeUser: () => {},
  likeUser: () => {},
});

/**
 * A context provider used for anything related to users.
 */
export function UsersProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const { children } = props;
  const [users, setUsers] = React.useState<User[]>([]);

  // Load users
  const loadUsers = React.useCallback(async () => {
    const result = await UsersAPI.loadUsers();

    setUsers((prev) => [...prev, ...result.users]);
  }, []);

  // Dislike user
  const dislikeUser = React.useCallback(async (userId: string) => {
    const result = await UsersAPI.dislikeUser(userId);
  }, []);

  // Like user
  const likeUser = React.useCallback(async (userId: string) => {
    const result = await UsersAPI.likeUser(userId);
  }, []);

  // Create context provider value
  const value = React.useMemo<UsersContextValue>(() => {
    return {
      users,
      loadUsers,
      dislikeUser,
      likeUser,
    };
  }, [users, loadUsers, dislikeUser, likeUser]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

/** A hook to manipulate users  */
export function useUsers(): UsersContextValue {
  return React.useContext(UsersContext);
}
